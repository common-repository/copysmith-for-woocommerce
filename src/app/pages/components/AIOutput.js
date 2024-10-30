import React, { useState } from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';

import ConfrimationModal from './Modals/ConfrimationModal';
import useDeleteDocument from '../../resources/useDeleteDocument';
import useUpdateDocument from '../../resources/useUpdateDocument';
import useUpdateProductDescription from '../../resources/useUpdateProductDescription';

const AIOutput = ({content, product, fileId, docId, setExpanded}) => {

  const [modalOpen, setModalOpen] = useState(false);
  const [editable, setEditable] = useState(false);
  const [localContent, setLocalContent] = useState(content);
  const { mutateAsync, error, isLoading } = useUpdateProductDescription();
  const { mutateAsync: updateDoc, error: updateError, isLoading: updateLoading} = useUpdateDocument();
  const {mutateAsync: deleteDoc, error: docError, isLoading: docLoading} = useDeleteDocument();
  
  const closeModal = (keepOpen = false) =>  {
    setModalOpen(false);
    if(!keepOpen) {
      setExpanded(false);
    }
  }

  const handleApply = async () => {
    try {
      await mutateAsync({
        ID: product.ID,
        content: localContent,
      });
    } catch(e) {
      console.error(e);
      return;
    }

    setModalOpen(true);
  };

  const handleDelete = async () => {
    await deleteDoc({ id: docId, fileId });
  };

  const handleUpdateDoc = async () => {
    await updateDoc({ id: docId, content: localContent });
    setEditable(false);
  };

  return (
    <div className="cs-ai-output-card">
      { editable ? (
        <textarea 
          onChange={(e) => setLocalContent(e.target.value)} 
          rows={5} 
          defaultValue={localContent}
        >
        </textarea>
      ) : (<p>
        {localContent}
      </p>)}
      <div className="cs-ai-output-badges">
        <div className="cs-ai-badge-char">
          { localContent ? localContent.length : '0' } char
        </div>
        <div className="cs-ai-badge-new">New</div>
      </div>
      <div className="cs-ai-card-actions">
        <div className="cs-ai-card-action-list">
          <div>
            <EditIcon onClick={() => !editable && setEditable(!editable)} disabled={editable} />
          </div>
          <div>
            <DeleteOutlineIcon onClick={() => handleDelete()} />
          </div>
        </div>
        <div>
          { editable 
          ? (
            <button 
              className="cs-ai-button"
              style={{padding: "0.5rem 1.5rem"}}
              onClick={() => handleUpdateDoc()}
            >
              Save
            </button>
          )
          : (
            <button
              className="cs-ai-button"
              style={{padding: "0.5rem 1.5rem"}}
              onClick={() => handleApply()}
            >
              Apply
            </button>
          )}
        </div>
      </div>
      <ConfrimationModal 
        product={product} 
        modalOpen={modalOpen} 
        closeModal={closeModal}
      />
    </div>
  );
};

export default AIOutput;