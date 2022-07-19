import './App.css';
import { useEffect, useState } from 'react';
import {
  adddata,
  getdatabyid,
  getdatas,
  removedatabyid,
} from './api/form-apis';
function App() {
  const submit_data = (e) => {
    e.preventDefault();
    adddata(profile);
  };
  const get_dataId = async (id) => {
    await getdatabyid(id);
  };
  const get_alldata = () => {
    getdatas();
  };
  const delete_databyId = (id) => {
    removedatabyid(id);
  };

  const [profileId, setPrfileId] = useState('');
  const [idtoDelete, setidtoDelete] = useState('');
  const [profile, setPrfile] = useState({
    name: '',
    email: '',
    phoneNum: '',
    salary: '',
    education: '',
    gender: '',
    age: '',
  });
  const ObjectofChange = {
    name: (e) => {
      setPrfile((prev) => {
        const newObj = { ...prev };
        newObj.name = e.target.value;
        return newObj;
      });
    },
    email: (e) => {
      setPrfile((prev) => {
        const newObj = { ...prev };
        newObj.email = e.target.value;
        return newObj;
      });
    },
    phoneNum: (e) => {
      setPrfile((prev) => {
        const newObj = { ...prev };
        newObj.phoneNum = e.target.value;
        return newObj;
      });
    },
    salary: (e) => {
      setPrfile((prev) => {
        const newObj = { ...prev };
        newObj.salary = e.target.value;
        return newObj;
      });
    },
    education: (e) => {
      setPrfile((prev) => {
        const newObj = { ...prev };
        newObj.education = e.target.value;
        return newObj;
      });
    },
    gender: (e) => {
      setPrfile((prev) => {
        const newObj = { ...prev };
        newObj.gender = e.target.value;
        return newObj;
      });
    },
    age: (e) => {
      setPrfile((prev) => {
        const newObj = { ...prev };
        newObj.age = e.target.value;
        return newObj;
      });
    },
  };

  useEffect(() => {
    // console.log(profile);
  }, [profile]);

  return (
    <div className='App'>
      <div>
        <form className='form-controll' onSubmit={submit_data}>
          <div>
            <label htmlFor='name'>ชื่อ นามสกุล </label>{' '}
            <input
              id='name'
              value={profile.name}
              onChange={ObjectofChange.name}
            />
            <label htmlFor='email' type='email'>
              อีเมล{' '}
            </label>{' '}
            <input
              id='email'
              value={profile.email}
              onChange={ObjectofChange.email}
            />
            <label htmlFor='phoneNum' type='number'>
              เบอร์โทร
            </label>
            <input
              id='phoneNum'
              value={profile.phoneNum}
              onChange={ObjectofChange.phoneNum}
            />
            <label htmlFor='salary' type='number'>
              เงินเดือน{' '}
            </label>
            <select name='salary' id='salary' onChange={ObjectofChange.salary}>
              <option value='0-15000'>0 - 15,000 บาท</option>
              <option value='15001-30000'>15,001 - 30,000 บาท</option>
              <option value='30000'>30,000 บาท ขึ้นไป</option>
            </select>
            <label htmlFor='education'>การศึกษา </label>
            <select
              name='education'
              id='education'
              value={profile.education}
              onChange={ObjectofChange.education}
            >
              <option value='bachelor'> ป. ตรี</option>
              <option value='master'> ป. โท</option>
              <option value='doctor'> ป. เอก</option>
            </select>
            <label htmlFor='gender'>เพศ </label>
            <div className='genderinput'>
              <input
                type='radio'
                name='gender'
                value='male'
                onClick={ObjectofChange.gender}
              />
              ชาย
              <input
                type='radio'
                name='gender'
                value='female'
                onClick={ObjectofChange.gender}
              />
              หญิง
            </div>
            <label htmlFor='age'>อายุ </label>
            <input
              id='age'
              type='number'
              value={profile.age}
              onChange={ObjectofChange.age}
            />
            <div className='butSubmit'>
              <button type=' submit'>บันทึก</button>
            </div>
          </div>
        </form>
        <div className='optionalButton '>
          <div className='butSubmit'>
            <button type='button' onClick={get_alldata}>
              get allData TO console.LOG
            </button>
          </div>
        </div>

        <div className='butSubmit'>
          <button
            onClick={async () => {
              await get_dataId(profileId);
            }}
          >
            get Data by Id
          </button>{' '}
          <input
            value={profileId}
            onChange={(e) => {
              setPrfileId(e.target.value);
            }}
          />
        </div>
        <div className='butSubmit'>
          <button
            type=' button'
            onClick={() => {
              delete_databyId(idtoDelete);
            }}
          >
            Delete data by Id
          </button>{' '}
          <input
            value={idtoDelete}
            onChange={(e) => {
              setidtoDelete(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
