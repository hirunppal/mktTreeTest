import axios from 'axios';

export const adddata = async (profile) => {
  const res = await axios.post('http://localhost:3000/form', profile);
  console.log(res.data);
  return res.data;
};
export const getdatas = async () => {
  const res = await axios.get('http://localhost:3000/form');
  console.log(res.data);
  return res.data;
};
export const getdatabyid = async (id) => {
  // console.log(id);
  const res = await axios.get('http://localhost:3000/form/' + id);
  console.log(res.data);
  return res.data;
};
export const removedatabyid = async (id) => {
  const res = await axios.delete('http://localhost:3000/form/' + id);
  console.log(res.data);
  return res.data;
};

// 2.1. api Method POST เอาค่าที่บันทึกทั้งหมด จากข้อ 1. (โจทย์ข้างบน) กลับมาเป็น Json แยกเป็น Array Object
// 2.2. api Method POST ขอข้อมูลที่บันทึกจากข้อ 1.(โจทย์ข้างบน) โดย ID และแสดง
// 2.3. api Method POST ลบข้อมูลที่บันทึกจากข้อ 1.(โจทย์ข้างบน) โดย ID
