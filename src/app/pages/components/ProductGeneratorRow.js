import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import CircularProgress from '@mui/material/CircularProgress';

import GenerateButton from './GenerateButton';
import productDescriptionfields from '../../constants/productDescriptionFields';
import FieldRender from '../../components/Template/FieldRender';
import ProductGeneratorOutput from './ProductGeneratorOutput';
import useCreateFile from '../../resources/useCreateFile';
import useGenerateContent from '../../resources/useGenerateContent';
import useUpdateFile from '../../resources/useUpdateFile';
import productSchema from '../validation/productSchema';

const initialValues = {
  tone: 'Neutral',
  companyName: '',
  productName: '',
  productKeywords: [],
  brandKeywords: [],
  negativeKeywordArray: [],
};

const arrayToKeyword = (keywords) => {
  if(!keywords || keywords.length < 1) {
    return [];
  }

  return keywords.map(word => ({
    id: word,
    text: word,
  }));
}

const buildInitialValues = function(product, csProduct) {
  let values = Object.assign({}, initialValues);
  values.productName =  product.post_title;

  if(csProduct) {
    values.negativeKeywordArray = arrayToKeyword(csProduct.negativeKeywordArray);
    values.productName = csProduct.data.productName;
    values.companyName = csProduct.data.companyName;
    values.productKeywords = arrayToKeyword(csProduct.data.productKeywords);
    values.brandKeywords = arrayToKeyword(csProduct.data.brandKeywords);
    values.tone = csProduct.data.tone;
  }

  return values;
}

const ProductGeneratorRow = ({product, csProduct, expanded, setExpanded}) => {

  const {mutateAsync} = useCreateFile();
  const {mutateAsync: generateContent, isLoading} = useGenerateContent();
  const [genreations, setGenerations] = useState({});
  const {mutateAsync: updateFile} = useUpdateFile();

  const handleSubmit = async (values) => {
    let response;
    if(!csProduct) {
      response = await mutateAsync({
        title: values.productName,
        templateType: 'productDescription',
        externalId: String(product.ID),
        negativeKeywordArray: values.negativeKeywordArray.map(keyword => keyword.text),
        data: {
          productName: values.productName,
          companyName: values.companyName,
          brandKeywords: values.brandKeywords.map(keyword => keyword.text),
          productKeywords: values.productKeywords.map(keyword => keyword.text),
          tone: values.tone
        },
      });
    }

    if(csProduct) {
      await updateFile({
        fileId: csProduct._id,
        data: {
          negativeKeywordArray: values.negativeKeywordArray.map(keyword => keyword.text),
          data: {
            productName: values.productName,
            companyName: values.companyName,
            brandKeywords: values.brandKeywords.map(keyword => keyword.text),
            productKeywords: values.productKeywords.map(keyword => keyword.text),
            tone: values.tone
          },
        }
      });
    }

    const content = await generateContent({
      data: {
        fileId: csProduct ? csProduct._id : response._id,
        tone: values.tone,
        engine: 'default'
      },
      externalId: String(product.ID),
    });

    setGenerations(content);
  }

  if(!expanded) {
    return null;
  }

  return (
      <tr>
        <td colSpan="3" className="cs-ai-product-generator">
          <Formik
            enableReinitialize
            initialValues={buildInitialValues(product, csProduct)}
            onSubmit={handleSubmit}
            validationSchema={productSchema}
          >
            {() => (
              <Form
                className="cs-ai-product-generator-form"
              >
                <FieldRender fields={productDescriptionfields} />
                <GenerateButton isLoading={isLoading} />
              </Form>
            )}
          </Formik>
        </td>
        <td colSpan="3" className="cs-ai-product-output">
          <ProductGeneratorOutput
            csProduct={csProduct}
            product={product}
            genreations={genreations}
            setExpanded={setExpanded}
          />
        </td>
    </tr>
  );
};

export default ProductGeneratorRow;