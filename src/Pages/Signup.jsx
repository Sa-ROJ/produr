import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>
            <div className="cointainer-fluid">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6 shadow py-3">
                    <main className="form-signin w-100 m-auto">
                <form>
                    <img className="mb-4" src="/image/img.jpg" alt="" width="300" height="75" />
                    <h1 className="h3 mb-3 fw-normal">Please sign up</h1>

                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">User name</label>
                    </div>

                     

                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="form-check text-start my-3">
                        <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Remember me
                        </label>
                    </div>
                    <Link to='/' className="btn btn-primary w-100 py-2" type="submit">Sign-up</Link>
                    <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2023</p>
                </form>
            </main>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Signup 