import React from "react";

import "../../style/AddTask.scss";

import trash from "../../photo/trash3-fill.svg";
import edit from "../../photo/pencil-square.svg";
import close from "../../photo/x-circle-fill.svg";

interface Props {
  onClose: () => void;
}

export const AddTask: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-content__header">
          <div>
            <button type="button" className="modal-content__header--button">
              <img src={trash} alt="delete" />
            </button>
            <button type="button" className="modal-content__header--button">
              <img src={edit} alt="edit" />
            </button>
          </div>
          <div>
            <button 
              type="button" 
              className="modal-content__header--button" 
              onClick={onClose}
            >
              <img src={close} alt="close" />
            </button>
          </div>
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="taskName">Task Name</label>
            <input type="text" id="taskName" name="taskName" />
          </div>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input type="text" id="author" name="author" readOnly />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select id="status" name="status">
              <option value="pending">Pending</option>
              <option value="inProgress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="importance">Importance</label>
            <select id="importance" name="importance">
              <option value="important">Important</option>
              <option value="notImportant">Not Important</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="urgency">Urgency</label>
            <select id="urgency" name="urgency">
              <option value="urgent">Urgent</option>
              <option value="notUrgent">Not Urgent</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="deadline">Deadline</label>
            <input type="date" id="deadline" name="deadline" />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" rows={4}></textarea>
          </div>
          <button type="submit">Add Task</button>
        </form>
      </div>
    </div>
  )
};
