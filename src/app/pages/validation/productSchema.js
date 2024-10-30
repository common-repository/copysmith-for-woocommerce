import * as Yup from 'yup';

const productSchema = Yup.object().shape({
  tone: Yup.string().required(),
  companyName: Yup.string().required('Company Name is required'),
  productName: Yup.string().required('Product Name is required'),
  productKeywords: Yup.array().min(1, 'Product Keyword must have at least 1 keyword').required(),
  brandKeywords: Yup.array().min(1, 'Brand Keyword must have at least 1 keyword').required(),
  negativeKeywordArray: Yup.array()
});

export default productSchema;