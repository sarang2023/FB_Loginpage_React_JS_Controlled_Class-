import React from "react";
import './FB.css';
export default class FBloginCC extends React.Component
{
    constructor()
    {
        super()
        this.state={fn:'',ln:'',m:'',p:'',d:'',mon:'',yr:'',g:'',show:'none',res:''}
    }
    display=(e)=>
    {
        const result = `First name: ${this.state.fn} Last name: ${this.state.ln} Mobile number or email: ${this.state.m} Password: ${this.state.p} Date of birth: ${this.state.d} ${this.state.mon} ${this.state.yr} Gender: ${this.state.g}`;
        this.setState({res:result})
        e.preventDefault()
    }
    other=()=>
    {
        this.setState({show:'block'})
    }
    malefemale=(e)=>
    {
        if(this.other)
        {
            this.setState({show:'none'})
        }
    }
    render()
    {
        return(<div>
             <div className="container">
            <div className="img">
                <img src="fb.png"alt="logo"width='350px'/>
                <div className="create">
                <h3>Create a new account</h3>
                <h5>It's quick and easy.</h5>
            </div>
            </div>
            <input type="text"placeholder="First Name"className="name" onChange={(e)=>this.setState({fn:e.target.value})}/>

            <input type="text"placeholder="Last Name"className="name" onChange={(e)=>{this.setState({ln:e.target.value})}}/><br/>

            <input type="text"placeholder="Mobile number"className="ph" onChange={(e)=>{this.setState({m:e.target.value})}}/><br/>

            <input type="password"placeholder="New Password"className="ph" onChange={(e)=>{this.setState({p:e.target.value})}}/><br/>


            <div className ="date">Date of birth</div>
            <select className="date1" onChange={(e)=>{this.setState({d:e.target.value})}}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
            </select>
            
            <select className="date1" onChange={(e)=>{this.setState({mon:e.target.value})}}>
            <option value="">Select Month</option>
            <option value="Jan">Jan</option>
                <option value="Feb">Feb</option>
                <option value="Mar">Mar</option>
                <option value="Apr">Apr</option>
                <option value="May">May</option>
                <option value="Jun">Jun</option>
                <option value="Jul">Jul</option>
                <option value="Aug">Aug</option>
                <option value="Sep">Sep</option>
                <option value="Oct">Oct</option>
                <option value="Nov">Nov</option>
                <option value="Dec">Dec</option>
            </select>
            


            <select className="date1" onChange={(e)=>{this.setState({yr:e.target.value})}}>
            <option value="">Select Year</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
                <option value="1999">1999</option>
                <option value="1998">1998</option>
                <option value="1997">1997</option>
                <option value="1996">1996</option>
                <option value="1995">1995</option>
                <option value="1994">1994</option>
                <option value="1993">1993</option>
            </select><br/>

        Female<input type="radio"name="gender"value="Female"onChange={(e)=>{this.setState({g:e.target.value})}} onClick={this.malefemale}/>

        Male<input type="radio"name="gender"value="Male"onChange={(e)=>{this.setState({g:e.target.value})}} onClick={this.malefemale}/>

        Custom<input type="radio"name="gender"value="Custom"onChange={this.other}/><br/>

        <div style={{display:this.state.show}}>

        <select className="ph" onChange={(e)=>{this.setState({g:e.target.value})}}>
        
        <option value="Select your pronoun">Select your pronoun</option>
        <option value="She:Wish her a Happy Birthday!">She:Wish her a Happy Birthday!</option>
        <option value="He:Wish him a Happy Birthday!">He:Wish him a Happy Birthday!</option>
        <option value="Them:Wish them a Happy Birthday">Them:Wish them a Happy Birthday</option>
</select>
<h6>Your pronoun is visible to everyone.</h6>
                <input type="text"placeholder="Gender(optional)"className="ph"/>
                </div>
                <div className="text">
                    <p>People who use our service may have uploaded your contact information to Facebook. Learn more.
                    By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.
                    </p>
                </div>
</div>
<center><input type="button"value="Sign Up"id="btn"onClick={this.display}/></center>
<br/>
<div className="container">{this.state.res}</div>
        </div>)
    }
}