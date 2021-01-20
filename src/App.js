/* eslint-disable */
import logo from './logo.svg';
import './App.css';

function App() {
    return (<
        div className="container" >
        <div className="con-introduce" >
            <strong><div className="con-introduce-chude">Introducing Yourself Self</div> Introduction with Text Boxes </strong>
            <hr></hr>
        </div>

        <img src="images/phuong.jpg"></img>
        <div className="con-info" >
            <strong> <div className="con-con-info">Hello</div></strong>
            <p>My name is Phuong</p>
        </div>
        <div className="con-content" >
            <div class="col-wrap">
                <div class="col">
                    <h2>Text Here 01</h2>
                    <p>This slide 100% editable. Adapt it to your needs and capture your audience's attention </p>
                </div>

                <div class="col">
                    <h2>Text Here 02</h2>
                    <p>This slide 100% editable. Adapt it to your needs and capture your audience's attention </p>
                </div>
            </div>
            <div class="col-wrap">
                <div class="col">
                    <h2>Text Here 03</h2>
                    <p>This slide 100% editable. Adapt it to your needs and capture your audience's attention </p>
                </div>
                <div class="col">
                    <h2>Text Here 04</h2>
                    <p>This slide 100% editable. Adapt it to your needs and capture your audience's attention </p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default App;
