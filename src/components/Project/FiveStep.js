import React, { useState, createRef } from 'react'

export default function FiveStep({ nextStep, data }) {

    const firstNameRef = createRef()
    const lastNameRef = createRef()
    const emailRef = createRef()
    const companyRef = createRef()
    const jobTitleRef = createRef()
    const countryRef = createRef()

    const [error, updateError] = useState(false)

    const sendData = e => {
        e.preventDefault()

        let campoVacio = false

        const info = {
            ...data,
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value,
            company: companyRef.current.value,
            jobTitle: jobTitleRef.current.value,
            country: countryRef.current.value
        }

        for (let elem in info) {
            if (info[elem] === "") {
                campoVacio = true
                updateError(true)
                break
            }
        }

        // Si no hay ningun campo vacio
        if (!campoVacio) {
            updateError(false)
            console.log(info);
            nextStep()
        }

    }

    return (
        <div className="cards-container">
            <form className="form-build" onSubmit={sendData}>
                <div className="row justify-content-md-center">
                    <div className="col-12 col-md-6">
                        <div className="input-field">
                            <input type="text" required ref={firstNameRef} placeholder="First Name" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="input-field">
                            <input type="text" required ref={lastNameRef} placeholder="Last Name" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="input-field">
                            <input type="email" required ref={emailRef} placeholder="Email Address" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="input-field">
                            <input type="text" required ref={companyRef} placeholder="Company" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="input-field">
                            <input type="text" required ref={jobTitleRef} placeholder="Job Title" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="input-field">
                            <select ref={countryRef} >
                                <option value="mexico">Mexico</option>
                                <option value="colombia">Colombia</option>
                                <option value="eua">Estados Unidos</option>
                                <option value="india">India</option>
                            </select>
                        </div>
                    </div>

                    <div className="">
                        {error ? <p className="error" >Completa todos los campos</p> : ''}
                        <input className="btn text-bold" type="submit" value="Build with Besoft" />
                    </div>
                </div>
            </form>
        </div>
    )
}
