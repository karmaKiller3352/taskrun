import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import CKEditor from '@ckeditor/ckeditor5-react';
import BalloonEditor from '@ckeditor/ckeditor5-build-balloon';
import { Row, Col, Dropdown } from 'react-bootstrap';
import { createMarkup, unixToDetailDate, unixToShortTime } from '../utils';
import {
  addCommentRequest,
  fetchComments,
  removeCommentRequest,
  changeCommentRequest,
} from '../redux/actions';

const mapStatetoProps = (state) => ({
  comments: state.comments.comments.sort((a, b) => a.created - b.created),
  id: state.tasks.openTask.objectId,
});

const mapDispatchtoProps = {
  fetchComments,
  addCommentRequest,
  removeCommentRequest,
  changeCommentRequest,
};
const Comments = React.memo(
  ({
    comments,
    id,
    addCommentRequest,
    fetchComments,
    removeCommentRequest,
    changeCommentRequest,
  }) => {
    const [mode, setMode] = useState('add');
    const [comment, handleComment] = useState();
    const [editingComment, setEditingComment] = useState();
    const commentField = useRef();
    useEffect(() => {
      fetchComments(id);
    }, [fetchComments, id]);

    function noneCommentsPreview() {
      return (
        <>
          <div className='image'></div>
          <span>it's time to start commenting</span>
        </>
      );
    }

    const getDate = (ts) => unixToDetailDate(ts);

    function commentsList() {
      return (
        <>
          {comments.map((comment, i) => (
            <div className='comment' key={comment.objectId}>
              <Row>
                <Col md={12}>
                  <div className='comment-date'>
                    {comments[i - 1] &&
                    getDate(comments[i - 1].created) ===
                      getDate(comments[i].created)
                      ? null
                      : getDate(comments[i].created)}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={1}>
                  <div className='comment-image avatar'></div>
                </Col>
                <Col md={9}>
                  <div className='comment-body'>
                    <p dangerouslySetInnerHTML={createMarkup(comment.BODY)}></p>
                  </div>
                </Col>
                <Col md={1}>
                  <div className='comment-time'>
                    {unixToShortTime(comment.created)}
                  </div>
                </Col>
                <Col md={1}>
                  <Dropdown>
                    <Dropdown.Toggle className='comment-menu' />
                    <Dropdown.Menu>
                      <Dropdown.Item
                        className='ed'
                        href='#'
                        onClick={() => {
                          setMode('editing');

                          handleComment(comment.BODY);
                          setEditingComment(comment);
                          setMode('edit');
                          commentField.current.editor.sourceElement.focus();
                        }}
                      >
                        Edit
                      </Dropdown.Item>
                      <Dropdown.Item
                        className='rm'
                        href='#'
                        onClick={() => {
                          removeCommentRequest(comment.objectId);
                        }}
                      >
                        Remove
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Row>
            </div>
          ))}
          <div className='bottom-line'></div>
        </>
      );
    }

    return (
      <div className='comments'>
        <div className='comments-body'>
          <h3>Comments</h3>
          <div className='comments-intro'>
            {comments.length > 0 ? commentsList() : noneCommentsPreview()}

            <Row>
              <Col md={1}></Col>
              <Col md={10}>
                <CKEditor
                  ref={commentField}
                  config={{ placeholder: 'Send comment' }}
                  data={comment}
                  onChange={(e, editor) => {
                    const data = editor.getData();
                    handleComment(data);
                    if (mode === 'edit') {
                      setEditingComment((prevValue) => ({
                        ...prevValue,
                        BODY: data,
                      }));
                    }
                  }}
                  editor={BalloonEditor}
                ></CKEditor>
              </Col>
              <Col md={1}>
                <button
                  className='image-send'
                  onClick={() => {
                    if (mode === 'edit') {
                      changeCommentRequest(editingComment);
                    }
                    if (mode === 'add') {
                      addCommentRequest(comment, id);
                    }
                    setMode('add');
                    handleComment('');
                  }}
                ></button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
);

export default connect(mapStatetoProps, mapDispatchtoProps)(Comments);
