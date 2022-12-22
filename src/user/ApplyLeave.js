import React from "react";
import "../style/applyleave.css";

class LeaveForm extends React.Component {
  render() {
    return (
      <div className="leave-form">
        <form>
          <label>Employee Name</label>
          <input type="text" name="name" placeholder="Name" />
          <label>Position/Department</label>
          <input type="text" name="name" />
          <label>Leave Type</label>
          <input type="text" name="name" />
          <label>Leave Start</label>
          <input type="text" name="name" placeholder="mm/dd/yyyy" />
          <label>Leave End</label>
          <input type="text" name="name" placeholder="mm/dd/yyyy" />
          <label>Leave Count Include</label>
          <div className="radio">
            <input type="radio" name="day" value="Saturday" /> Saturday
          </div>
          <div className="radio">
            <input type="radio" name="day" value="Sunday" /> Sunday
          </div>
          <div className="radio">
            <input type="radio" name="day" value="Holiday" /> Holiday
          </div>
          <label>Total Leave Count</label>
          <input type="text" name="name" />
        </form>
        <form>
          <label>Remarks</label>
          <input type="text" name="name" />
          <label>Support Officer</label>
          <input type="text" name="name" />
          <label>Support Officer Remarks</label>
          <input type="text" name="name" />
          <label>Supporting Documents</label>
          <input type="file" className="file" />
          <label>Approval Officer</label>
          <table>
            <tr>
              <th>Level</th>
              <th>Officer</th>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </table>
          <div className="button">
            <button>Cancel</button>
            <button>Apply</button>
          </div>
        </form>
      </div>
    );
  }
}

export default LeaveForm;
