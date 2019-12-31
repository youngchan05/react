import React , {useState ,useRef} from 'react';
function InputSample(){
    const [ inputs , setInputs] = useState({
        name:'',
        nickname:'',
    })
    const nameInput = useRef();
    const onChange = (e) => {
        const {name , value} = e.target;
        setInputs({
            ...inputs, //불변성 지키기위해 복사
            [name]:value,
        })
    }
    const onReset = () => {
        setInputs({
            name:'',
            nickname:'',
        })
        nameInput.current.focus();
    }
    return(
            <div>
                <input  name="name" ref={nameInput} placeholder="이름" onChange={onChange} value={inputs.name}/>
                <input  name="nickname" placeholder="닉네임" onChange={onChange} value={inputs.nickname}/>
                <button onClick={onReset} >초기화</button>
                <div>
                    <b>값</b>
                    {inputs.name}
                    {inputs.nickname}
                </div>
            </div>
    )
}
export default  InputSample;