'use client'
import {FC} from "react";
import {RegisterOptions, useForm} from "react-hook-form";
import "@/styles/ZbunForm.scss"
import { ErrorMessage } from '@hookform/error-message';
import {baseValidation, mail, phone, positiveNum, required} from "@/config/zbunFormValidation";
import {validationSchema} from "@/config/zbunFormZod";

const Page: FC = () => {
    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm({
        criteriaMode: "all"
    });

    const onSubmit = (data: Record<string, any>) => {
        try {
            validationSchema.parse(data)
            alert("Успіх")
        } catch (e) {
            console.log(e)
            alert("Помилка")
        }
    }

    interface IInputWrapperProps {
        placeholder: string
        name: string
        validation: RegisterOptions
        type?: string
    }

    const InputWrapper: FC<IInputWrapperProps> = ({name, validation, placeholder, type = "text"}) => {
        return (
            <div className="inputWrapper">
                <input
                    placeholder={placeholder}
                    type={type}
                    {...register(name, validation)}
                />
                <div className="messages">
                    <ErrorMessage
                        errors={errors}
                        name={name}
                        render={({ messages }) =>
                            messages &&
                            Object.entries(messages).map(([type, message]) => (
                                <p key={type}>{message}</p>
                            ))
                        }
                    />
                </div>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="ZbunForm">
            <div className="block">
                <InputWrapper
                    placeholder="Імʼя"
                    name="name"
                    validation={baseValidation}
                />
                <InputWrapper
                    placeholder="Електронна пошта"
                    name="email"
                    validation={mail}
                />
                <InputWrapper
                    placeholder="Телефон"
                    name="phone"
                    validation={phone}
                />
            </div>

            <div className="container">
                <div className="block block-short">
                    <InputWrapper
                        placeholder="Країна"
                        name="loading_country"
                        validation={baseValidation}
                    />
                    <InputWrapper
                        placeholder="Місто"
                        name={"loading_city"}
                        validation={baseValidation}
                    />
                    <InputWrapper
                        placeholder="Індекс"
                        name={"loading_index"}
                        type="number"
                        validation={positiveNum}
                    />

                    <div>
                        <label htmlFor="loading_person">
                            Особа
                        </label>
                        <select
                            {...register("loading_person", required)}
                            defaultValue={"individual"}
                        >
                            <option value="individual">Фізична</option>
                            <option value="legal">Юридична</option>
                        </select>
                    </div>
                </div>

                <div className="block block-short">
                    <InputWrapper
                        placeholder="Країна"
                        name={"unloading_country"}
                        validation={baseValidation}
                    />
                    <InputWrapper
                        placeholder="Місто"
                        name={"unloading_city"}
                        validation={baseValidation}
                    />
                    <InputWrapper
                        placeholder="Індекс"
                        name={"unloading_index"}
                        type="number"
                        validation={positiveNum}
                    />
                    <div>
                        <label htmlFor="unloading_person">
                            Особа
                        </label>
                        <select
                            {...register("unloading_person", required)}
                            defaultValue={"individual"}
                        >
                            <option value="individual">Фізична</option>
                            <option value="legal">Юридична</option>
                        </select>
                    </div>
                </div>
            </div>

            <button type="submit">
                Надіслати форму
            </button>
        </form>
    )
}
export default Page