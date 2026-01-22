import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AxiosError } from "axios";
import type { RegisterFormType } from "../../types/uesr.ts";
import { registerUser } from "../../api/auth.api.ts";
import { twMerge } from "tailwind-merge";
import Input from "../components/input.tsx";

function Register() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<RegisterFormType>({
        defaultValues: {
            gender: "MALE",
        },
    });

    const password = watch("password");

    const onSubmit = async (data: RegisterFormType) => {
        setError("root", { message: "" });
        try {
            await registerUser(data);
            alert("회원가입이 완료되었습니다. 로그인해주세요!");
            navigate("/");
        } catch (error) {
            if (error instanceof AxiosError) {
                const serverMessage = error.response?.data?.message || "회원가입에 실패했습니다.";
                setError("root", { message: serverMessage });
            } else {
                setError("root", { message: "알 수 없는 오류가 발생했습니다." });
            }
        }
    };

    // 공통 스타일 클래스
    const errorInputStyle = "border-red-500 focus:border-red-500";

    return (
        <div className="flex flex-col items-center  min-h-screen px-4 py-40">
            <h2 className="text-3xl font-bold mb-10 text-center">JOIN MEMBER</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full max-w-lg gap-5">

                {/* 이메일 */}
                <div className="flex flex-col gap-1">
                    <Input
                        type="email"
                        placeholder="이메일을 입력해주세요*"
                        className={twMerge(errors.email && errorInputStyle)}
                        {...register("email", {
                            required: "이메일은 필수입니다.",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "올바른 이메일 형식이 아닙니다."
                            }
                        })}
                    />
                    {errors.email && <span className="text-xs text-red-500 ml-1">{errors.email.message}</span>}
                </div>

                {/* 비밀번호 */}
                <div className="flex flex-col gap-1">
                    <Input
                        type="password"
                        placeholder="비밀번호 (8자 이상)*"
                        className={twMerge( errors.password && errorInputStyle)}
                        {...register("password", {
                            required: "비밀번호는 필수입니다.",
                            minLength: { value: 8, message: "8자리 이상 입력해주세요." }
                        })}
                    />
                    {errors.password && <span className="text-xs text-red-500 ml-1">{errors.password.message}</span>}
                </div>

                {/* 비밀번호 확인 */}
                <div className="flex flex-col gap-1">
                    <Input
                        type="password"
                        placeholder="비밀번호 확인*"
                        className={twMerge( errors.password_confirm && errorInputStyle)}
                        {...register("password_confirm", {
                            required: "비밀번호 확인이 필요합니다.",
                            validate: (val) => val === password || "비밀번호가 일치하지 않습니다."
                        })}
                    />
                    {errors.password_confirm && <span className="text-xs text-red-500 ml-1">{errors.password_confirm.message}</span>}
                </div>

                {/* 이름 */}
                <div className="flex flex-col gap-1">
                    <Input
                        placeholder="이름*"
                        className={twMerge( errors.name && errorInputStyle)}
                        {...register("name", { required: "이름은 필수입니다." })}
                    />
                    {errors.name && <span className="text-xs text-red-500 ml-1">{errors.name.message}</span>}
                </div>

                {/* 휴대폰 번호 */}
                <div className="flex flex-col gap-1">
                    <Input
                        placeholder="휴대폰 번호 (-없이 입력)*"
                        className={twMerge( errors.phone && errorInputStyle)}
                        {...register("phone", {
                            required: "휴대폰 번호는 필수값입니다.",
                            pattern: {
                                value: /^01([0|1|6|7|8|9])?([0-9]{3,4})?([0-9]{4})$/,
                                message: "올바른 휴대폰 번호 형식이 아닙니다."
                            }
                        })}
                    />
                    {errors.phone && <span className="text-xs text-red-500 ml-1">{errors.phone.message}</span>}
                </div>

                {/* 성별 t */}
                <div className={twMerge("flex","justify-between", "gap-10")}>
                    <div className={"w-[80%]"}>
                        <Input
                            {...register("birthdate", { required: "생년월일은 필수입니다." })}
                            placeholder="생년월일 (YYYYMMDD)*"
                        />

                    </div>
                    <div className={twMerge("w-[80%]")}>
                        <select
                            className={twMerge( "bg-white","w-full","h-full","rounded-lg","text-center")}
                            {...register("gender")}

                        >
                            <option value="MALE">MALE</option>
                            <option value="FEMALE">FEMALE</option>
                        </select>
                    </div>
                </div>

                {/* 서버 에러 메시지 */}
                {errors.root && (
                    <p className="text-red-600 text-sm text-center font-semibold">
                        {errors.root.message}
                    </p>
                )}

                {/* 제출 버튼 */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 bg-black text-white font-bold rounded-md transition-all hover:bg-zinc-800 disabled:bg-gray-400 active:scale-[0.98]"
                >
                    {isSubmitting ? "처리 중..." : "회원가입"}
                </button>
            </form>
        </div>
    );
}

export default Register;