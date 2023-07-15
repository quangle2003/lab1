import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Vui lòng nhập họ tên"),
    email: Yup.string().email("Email không hợp lệ").required("Vui lòng nhập email"),
    gender: Yup.string().required("Vui lòng chọn giới tính"),
    employeeType: Yup.string().required("Vui lòng chọn bậc nhân viên"),
    numberOfDays: Yup.number().required("Vui lòng nhập số ngày").min(1, "Số ngày phải lớn hơn 0"),
    position: Yup.string().required("Vui lòng chọn chức vụ"),
});

const employeeTypes = [
    { value: "1", label: "Bậc 1 - 1200/ngày" },
    { value: "2", label: "Bậc 2 - 2400/ngày" },
    { value: "3", label: "Bậc 3 - 3600/ngày" },
];

const positions = [
    { value: "Nhân viên", label: "Nhân viên" },
    { value: "Quản lý", label: "Quản lý" },
    { value: "Giám đốc", label: "Giám đốc" },
];

const calculateHospitalizationFee = (employeeType: string, numberOfDays: number) => {
    let dailyRate = 0;
    switch (employeeType) {
        case "1":
            dailyRate = 1200;
            break;
        case "2":
            dailyRate = 2400;
            break;
        case "3":
            dailyRate = 3600;
            break;
        default:
            break;
    }
    return dailyRate * numberOfDays;
};

const HospitalizationForm = () => {
    const [result, setResult] = useState("");

    const initialValues = {
        fullName: "",
        email: "",
        gender: "",
        employeeType: "",
        numberOfDays: "",
        position: "",
    };

    const handleSubmit = (values: any) => {
        const hospitalizationFee = calculateHospitalizationFee(values.employeeType, values.numberOfDays);
        const result = `${values.fullName} (${values.position}) - Số ngày nằm viện: ${values.numberOfDays} - Tổng tiền viện là: ${hospitalizationFee} đồng`;
        setResult(result);
    };

    return (
        <div>
            <h1>Nhập thông tin nằm viện</h1>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {({ touched, errors }) => (
                    <Form>
                        <div>
                            <label htmlFor="fullName">Họ tên:</label>
                            <Field id="fullName" name="fullName" />
                            <ErrorMessage name="fullName" />
                        </div>

                        <div>
                            <label htmlFor="email">Email:</label>
                            <Field id="email" name="email" type="email" />
                            <ErrorMessage name="email" />
                        </div>

                        <div>
                            <label htmlFor="gender">Giới tính:</label>
                            <Field id="gender" name="gender" as="select">
                                <option value="">--Chọn giới tính--</option>
                                <option value="Nam">Nam</option>
                                <option value="Nữ">Nữ</option>
                            </Field>
                            <ErrorMessage name="gender" />
                        </div>

                        <div>
                            <label htmlFor="employeeType">Bậc nhân viên:</label>
                            <Field id="employeeType" name="employeeType" as="select">
                                <option value="">--Chọn bậc nhân viên--</option>
                                {employeeTypes.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </Field>
                            <ErrorMessage name="employeeType" />
                        </div>

                        <div>
                            <label htmlFor="numberOfDays">Số ngày nằm viện:</label>
                            <Field id="numberOfDays" name="numberOfDays" type="number" />
                            <ErrorMessage name="numberOfDays" />
                        </div>

                        <div>
                            <label htmlFor="position">Chức vụ:</label>
                            <Field id="position" name="position" as="select">
                                <option value="">--Chọn chức vụ--</option>
                                {positions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </Field>
                            <ErrorMessage name="position" />
                        </div>

                        <button type="submit">Check</button>
                    </Form>
                )}
            </Formik>
            {result && <div>{result}</div>}
        </div>
    );
};

export default HospitalizationForm;