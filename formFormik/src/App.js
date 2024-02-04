
import { Formik } from 'formik'
  const App = () => (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}>
        {({values, errors,touched,handleChange,handleBlur,handleSubmit, isSubmitting}) => (
          <form onSubmit={handleSubmit}>
            <input  type="email" name="email" onChange={handleChange} onBlur={handleBlur}  value={values.email}/><br></br>
            {errors.email && touched.email && errors.email}
            <input className='inputBtn' type="password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password}/><br></br>
            {errors.password && touched.password && errors.password}
            <button className='submitBtn' type="submit" disabled={isSubmitting}>Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
export default App;
