

function Main()
{
    const addc = () =>{
        let input = document.querySelector('#input');
        input.value = ''; 
    }
    const addd = (number) =>{
        let input = document.querySelector('#input');
        input.value = input.value+number; 
    }

    const adddiv = (number) =>{
        let input = document.querySelector('#input');
        input.value = input.value+number; 
    }
    const addmul = (number) =>{
        let input = document.querySelector('#input');
        input.value = input.value+number; 
    }
    const addm = (number) =>{
        let input = document.querySelector('#input');
        input.value = input.value+number; 
    }
    const addp = (number) =>{
        let input = document.querySelector('#input');
        input.value = input.value+number; 
    }
    const addno9 = (number) =>{
        let input = document.querySelector('#input');
        input.value = input.value+number; 
    }
    const addno8 = (number) =>{
        let input = document.querySelector('#input');
        input.value = input.value+number; 
    }
    const addno7 = (number) =>{
        let input = document.querySelector('#input');
        input.value = input.value+number; 
    }
    const addno6 = (number) =>{
        let input = document.querySelector('#input');
        input.value = input.value+number; 
    }
    const addno5 = (number) =>{
        let input = document.querySelector('#input');
        input.value = input.value+number; 
    }
    const addno4 = (number) =>{
        let input = document.querySelector('#input');
        input.value = input.value+number; 
    }
    const addno3 = (number) =>{
        let input = document.querySelector('#input');
        input.value = input.value+number; 
    }
    const addno2 = (number) =>{
        let input = document.querySelector('#input');
        input.value = input.value+number; 
    } 
    const addno1 = (number) =>{
        let input = document.querySelector('#input');
        input.value = input.value+number; 
    }
    const addno0= (number) =>{
        let input = document.querySelector('#input');
        input.value = input.value+number; 
    }
    
    const equal= () =>{
        let input = document.querySelector('#input');
        let ans = eval(input.value);
        input.value = ans;
    }
    
   

    


    return(
    <div id='main' className='flex flex-col justify-center items-center gap-[8px] h-[70vh] w-[26vw] text-[1.5vw] max-sm:w-[85vw] max-sm:h-[55vh] max-sm:text-[2.5vh] max-lg:w-[57vw] max-lg:h-[48vh] max-lg:gap-[10px] max-lg:text-[3vw] max-xl:w-[40vw] max-xl:h-[60vh] max-xl:text-[2vw]'>
        <input   className='w-[22vw] h-[9vh] p-[15px] text-[1.5vw] rounded-[5px] outline-none max-sm:w-[70vw] max-sm:h-[7vh] max-sm:text-[2.5vh] max-sm:p-[15px] max-lg:w-[45vw] max-lg:h-[5vh] max-lg:text-[3vw] max-xl:w-[33vw] max-xl:h-[7vh] max-xl:text-[2vw]' id='input' type="text" readOnly/>
        <div className='buttons  flex flex-col items-center justify-center outline-none gap-[8px] '>
        <div className=' w-[22vw] gap-[8px] flex items-center justify-center outline-none  w-auto h-auto max-sm:w-auto max-sm:h-auto max-sm:text-[2.5vh]'>
        <button className=' w-[5vw] h-[8vh] bg-[#ff9f0a] text-white rounded-[5px] outline-none max-sm:w-[8vh] max-sm:h-[6vh] max-lg:w-[10.5vw] max-lg:h-[6vh] max-xl:w-[7.7vw] max-xl:h-[7vh]' onClick={()=>addp('+')}>+</button>
        <button className=' w-[5vw] h-[8vh] bg-[#ff9f0a] text-white rounded-[5px] outline-none max-sm:w-[8vh] max-sm:h-[6vh] max-sm:text-[3vh] max-lg:w-[10.5vw] max-lg:h-[6vh] max-xl:w-[7.7vw] max-xl:h-[7vh]' onClick={()=>addm('-')}>-</button>
        <button  className=' w-[5vw] h-[8vh] bg-[#ff9f0a] text-white rounded-[5px] outline-none max-sm:w-[8vh] max-sm:h-[6vh] max-lg:w-[10.5vw] max-lg:h-[6vh] max-xl:w-[7.7vw] max-xl:h-[7vh]' onClick={()=>addmul('*')}>x</button>
        <button  className=' w-[5vw] h-[8vh] bg-[#ff9f0a] text-white rounded-[5px] outline-none max-sm:w-[8vh] max-sm:h-[6vh] max-lg:w-[10.5vw] max-lg:h-[6vh] max-xl:w-[7.7vw] max-xl:h-[7vh]' onClick={()=>adddiv('/')}>÷</button>
        </div>


        <div className='flex flex-row gap-[8px] outline-none  w-auto h-auto'>
            <div className='flex flex-col outline-none gap-[8px]'>
        <div className='  flex flex-row-reverse items-center justify-center gap-[8px] outline-none  max-sm:w-auto max-sm:h-auto '>
        <button className=' w-[5vw] h-[8vh] text-white rounded-[5px] bg-[#333333] outline-none max-sm:w-[8vh] max-sm:h-[6vh] max-lg:w-[10.5vw] max-lg:h-[6vh] max-xl:w-[7.7vw] max-xl:h-[7vh]' onClick={()=>addno7('7')}>7</button>
        <button className=' w-[5vw] h-[8vh] text-white rounded-[5px] bg-[#333333] outline-none max-sm:w-[8vh] max-sm:h-[6vh] max-lg:w-[10.5vw] max-lg:h-[6vh] max-xl:w-[7.7vw] max-xl:h-[7vh]' onClick={()=>addno8('8')}>8</button>
        <button className=' w-[5vw] h-[8vh] text-white rounded-[5px] bg-[#333333] outline-none max-sm:w-[8vh] max-sm:h-[6vh] max-lg:w-[10.5vw] max-lg:h-[6vh] max-xl:w-[7.7vw] max-xl:h-[7vh]' onClick={()=>addno9('9')}>9</button>
        </div>

        <div className='  flex flex-row-reverse items-center justify-center gap-[8px]  w-auto h-auto ' >
        <button className=' w-[5vw] h-[8vh] text-white rounded-[5px] bg-[#333333] outline-none max-sm:w-[8vh] max-sm:h-[6vh] max-lg:w-[10.5vw] max-lg:h-[6vh] max-xl:w-[7.7vw] max-xl:h-[7vh]' onClick={()=>addno4('4')}>4</button>
        <button className=' w-[5vw] h-[8vh] text-white rounded-[5px] bg-[#333333] outline-none max-sm:w-[8vh] max-sm:h-[6vh] max-lg:w-[10.5vw] max-lg:h-[6vh] max-xl:w-[7.7vw] max-xl:h-[7vh]' onClick={()=>addno5('5')}>5</button>
        <button className=' w-[5vw] h-[8vh] text-white rounded-[5px] bg-[#333333] outline-none max-sm:w-[8vh] max-sm:h-[6vh] max-lg:w-[10.5vw] max-lg:h-[6vh] max-xl:w-[7.7vw] max-xl:h-[7vh]' onClick={()=>addno6('6')}>6</button>
        </div>

        <div className='  flex flex-row-reverse items-center justify-center gap-[8px]  w-auto h-auto '>
        <button className=' w-[5vw] h-[8vh] text-white rounded-[5px] bg-[#333333] outline-none max-sm:w-[8vh] max-sm:h-[6vh] max-lg:w-[10.5vw] max-lg:h-[6vh] max-xl:w-[7.7vw] max-xl:h-[7vh]' onClick={()=>addno1('1')}>1</button>
        <button className=' w-[5vw] h-[8vh] text-white rounded-[5px] bg-[#333333] outline-none max-sm:w-[8vh] max-sm:h-[6vh] max-lg:w-[10.5vw] max-lg:h-[6vh] max-xl:w-[7.7vw] max-xl:h-[7vh]' onClick={()=>addno2('2')}>2</button>
        <button className=' w-[5vw] h-[8vh] text-white rounded-[5px] bg-[#333333] outline-none max-sm:w-[8vh] max-sm:h-[6vh] max-lg:w-[10.5vw] max-lg:h-[6vh] max-xl:w-[7.7vw] max-xl:h-[7vh]' onClick={()=>addno3('3')}>3</button>
        </div>
        
        <div className='  flex flex-row-reverse items-center justify-center gap-[8px]  w-auto h-auto '>
        <button className=' w-[5vw] h-[8vh] text-white rounded-[5px] bg-[#333333] outline-none max-sm:w-[8vh] max-sm:h-[6vh] max-lg:w-[10.5vw] max-lg:h-[6vh] max-xl:w-[7.7vw] max-xl:h-[7vh]' onClick={()=>addc()}>c</button>
        <button className=' w-[5vw] h-[8vh] text-white rounded-[5px] bg-[#333333] outline-none max-sm:w-[8vh] max-sm:h-[6vh] max-lg:w-[10.5vw] max-lg:h-[6vh] max-xl:w-[7.7vw] max-xl:h-[7vh]' onClick={()=>addd('.')}>.</button>
        <button className=' w-[5vw] h-[8vh] text-white rounded-[5px] bg-[#333333] outline-none max-sm:w-[8vh] max-sm:h-[6vh] max-lg:w-[10.5vw] max-lg:h-[6vh] max-xl:w-[7.7vw] max-xl:h-[7vh]' onClick={()=>addno0('0')}>0</button>
        </div>
        </div>
        <button className=' w-[5vw] h-[35.5vh] bg-[#ff9f0a] text-white rounded-[5px] outline-none max-sm:w-[8vh] max-sm:h-[27vh] max-sm:text-[3vh] max-lg:w-[10.5vw] max-lg:h-[26.2vh] max-xl:w-[7.7vw] max-xl:h-[31vh]' onClick={()=>equal()}>=</button>
        </div>
        </div>
    </div>
    );
}

export default Main;
