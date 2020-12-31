import React from 'react'
import './About.css';

function About() {
    return (
        <div class="modal fade  " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable ">
            <div class="modal-content ">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">About me</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                Natus porro eius nisi, sint culpa, quisquam sapiente,<br/>
                placeat asperiores similique id dolores tempore assumenda<br/>
                expedita cum nostrum cupiditate odio dignissimos repellendus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                Natus porro eius nisi, sint culpa, quisquam sapiente,<br/>
                placeat asperiores similique id dolores tempore assumenda<br/>
                expedita cum nostrum cupiditate odio dignissimos repellendus.
            </div>
            <div class="modal-footer">
                <button type="button" class="btn " id="btn-foot" data-bs-dismiss="modal">Close</button>
            
            </div>
            </div>
        </div>
</div>
    )
}

export default About