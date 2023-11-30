const FormLogin = () => {
  return (
    <form className='card-body'>
      <div className='form-control'>
        <label className='label'>
          <span className='label-text text-black'>Email</span>
        </label>
        <input
          type='email'
          placeholder='email'
          className='input input-bordered  text-white bg-black'
          required
        />
      </div>
      <div className='form-control'>
        <label className='label'>
          <span className='label-text text-black '>Password</span>
        </label>
        <input
          type='password'
          placeholder='password'
          className='input input-bordered text-white bg-black'
          required
        />
      </div>
      <div className='form-control mt-6'>
        <button className='btn text-white bg-black'>Login</button>
      </div>
    </form>
  )
}

export default FormLogin
