import React from 'react';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import useBookmarkFile from '../../resources/useBookmarkFile';
import useCreateFile from '../../resources/useCreateFile';

const Bookmark = ({csProduct, product}) => {
  const { mutateAsync: bookmarkFile, isLoading } = useBookmarkFile();
  const {mutateAsync: createFile} = useCreateFile();

  const handleBookmark = async () => {
    let newProduct;

    if(!csProduct) {
      newProduct = await createFile({
        title: product.post_title,
        externalId: `${product.ID}`,
        templateType: 'productDescription',
        negativeKeywordArray: [],
        data: {
          productName: product.post_title,
          companyName: '',
          brandKeywords: [],
          productKeywords: [],
          tone: 'Neutral'
        },
      });
    }

    const fileId = newProduct ? newProduct._id : csProduct._id

    await bookmarkFile({id: fileId, externalId: product.ID});
  } 

  return (
    <div className={`cs-ai-like-file${csProduct && csProduct.liked ? ' liked' : '' }`}>
      {csProduct && csProduct.liked 
      ? (
        <BookmarkIcon onClick={() => handleBookmark()} />
      )
      : (
        <BookmarkBorderIcon onClick={() => handleBookmark()} />
      ) }
    </div>
  );
};

export default Bookmark;