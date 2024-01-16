import "./index.scss";
import { Helmet } from "react-helmet-async";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useEffect, useState } from "react";

const AddPage = () => {
  const [services, setServices] = useState(null);
  const [searchvalue, setSearchvalue] = useState('')
  const [sort, setsort] = useState(null)
 
  const getAllServices = async (values) => {
    const resp = await axios("http://localhost:3000/");
    setServices(resp.data);
  };
  const createService = async (values) => {
    await axios.post("http://localhost:3000/", values);
  };
  const deleteService = async (id) => {
    await axios.delete(`http://localhost:3000/${id}`);
    getAllServices()
  };
  useEffect(() => {
    getAllServices();
  }, []);

  return (
    <>
      <Helmet>
        <title>Add Page</title>
      </Helmet>
      <section id="addPage">
        <Formik
          initialValues={{ icon: "", title: "", desc: "", price: "" }}
          validationSchema={Yup.object({
            icon: Yup.string()
              .max(30, "Must be 30 characters or less")
              .required("Required"),
            title: Yup.string()
              .max(50, "Must be 50 characters or less")
              .required("Required"),
            desc: Yup.string().required("Required"),
            price: Yup.number().required("Required"),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              createService(values);
              resetForm();
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form>
            <h1>Service Add Form</h1>
            <div>
              <label htmlFor="icon" className="form-label">
                Icon
              </label>
              <Field name="icon" type="text" className="form-control" />
              <div className="error">
                <ErrorMessage name="icon" />
              </div>
            </div>

            <div>
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <Field name="title" type="text" className="form-control" />
              <div className="error">
                <ErrorMessage name="title" />
              </div>
            </div>

            <div>
              <label htmlFor="desc" className="form-label">
                Desc
              </label>
              <Field name="desc" type="text" className="form-control" />
              <div className="error">
                <ErrorMessage name="desc" />
              </div>
            </div>

            <div>
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <Field name="price" type="number" className="form-control" />
              <div className="error">
                <ErrorMessage name="price" />
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </Form>
        </Formik>
      </section>
      <section id="service-table">
        <div className="container">
            <input type="text" onChange={(e)=>setSearchvalue(e.target.value)} />
            <button className="btn btn-dark" onClick={()=>setsort(null)}>Default</button>
            <button className="btn btn-dark" onClick={()=>setsort({property:"title",asc:true})}>Title A-Z</button>
            <button className="btn btn-dark" onClick={()=>setsort({property:"title",asc:false})}>Title Z-A</button>
            <button className="btn btn-dark" onClick={()=>setsort({property:"price",asc:false})}>Price Z-A</button>
            <button className="btn btn-dark" onClick={()=>setsort({property:"price",asc:true})}>Price Z-A</button>
                
          <table className="table table-dark">
            <thead>
              <tr>
                <th>icon</th>
                <th>title</th>
                <th>desc</th>
                <th>price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {services &&
                services
                .filter(item => item.title.toLowerCase().includes(searchvalue.toLowerCase()))
                .sort((a,b)=>{
                    if (sort && sort.asc === true) {
                        return (a[sort.property] > b[sort.property]) ? 1 : ((b[sort.property] > a[sort.property]) ? -1 : 0)
                    }
                    else if(sort && sort.asc === false){
                        return  (a[sort.property] < b[sort.property]) ? 1 : ((b[sort.property] < a[sort.property]) ? -1 : 0)
                    }
                    else{
                        return 0
                    }
                })
                .map((item) => (
                  <tr key={item._id}>
                    <td>{item.icon}</td>
                    <td>{item.title}</td>
                    <td>{item.desc}</td>
                    <td>{item.price}</td>
                    <td>
                      <button className="btn btn-danger" onClick={()=>deleteService(item._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default AddPage;
