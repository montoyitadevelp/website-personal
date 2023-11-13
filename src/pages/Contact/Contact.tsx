import { IconRecycle, IconSend } from "@tabler/icons-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import * as yup from "yup";
import React from "react";

interface Inputs {
  name: string;
  email: string;
  yourMessage: string;
}

const valiSchema = yup
  .object()
  .shape({
    name: yup.string().required("Ooh, the name is required!"),
    email: yup
      .string()
      .email("Ooh, enter a valid email address!")
      .required("Ooh, the email is required!"),
    yourMessage: yup.string().required("Ooh, the message is required!"),
  })
  .required();

const ContactUs = () => {
  const form = React.useRef<HTMLFormElement | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors},
    reset,
  } = useForm({
    resolver: yupResolver(valiSchema),
  });

  const handleClear = (event: React.FormEvent) => {
    event.preventDefault();
    reset();
    toast("Your fields was clear correctly!", {
      type: "info",
    });
  };

  const onSendContact: SubmitHandler<Inputs> = async () => {
    if (form.current) {
      try {
        const result = await emailjs.sendForm(
          import.meta.env.VITE_APP_SERVICE_ID as string,
          import.meta.env.VITE_APP_TEMPLATE_ID as string,
          form.current,
          import.meta.env.VITE_APP_PUBLIC_KEY as string
        );
        toast("Your message was send successfully!", {
          type: "success",
        });
        console.log(result);
      } catch (error) {
        console.error("An error ocurred", error);
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <section className="items-center font-mono h-[96vh] mb-10">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl text-center  text-danger-50">
            Contact Me
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Im grateful for you stay here, so for improve our communication
            let's connect!
          </p>
          <form
            ref={form}
            onSubmit={handleSubmit(onSendContact as any)}
            className="space-y-8  "
          >
            <div>
              <label className="block mb-2 text-sm font-medium  text-white">
                Name
              </label>
              <input
                aria-invalid={errors.name ? "false" : "true"}
                type="text"
                className={`${
                  errors.name?.message
                    ? "border-pink-700 "
                    : "  border-danger-50"
                } shadow-sm border text-white text-sm rounded-lg block w-full p-2.5  dark:bg-primary-50`}
                {...register("name")}
              />
              {errors.name && (
                <p className="text-pink-700">{errors.name?.message}</p>
              )}
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-white">
                Email
              </label>
              <input
                aria-invalid={errors.email?.message ? "false" : "true"}
                type="email"
                id="subject"
                className={`${
                  errors.email?.message ? "border-pink-700" : "border-danger-50"
                } block p-3 w-full text-sm rounded-lg text-white border  shadow-sm  dark:bg-primary-50 `}
                {...register("email")}
              />
              {errors.email && (
                <p className="text-pink-700">{errors.email?.message}</p>
              )}
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm  text-white">
                Your message
              </label>
              <textarea
                aria-invalid={errors.yourMessage ? "false" : "true"}
                className={`${
                  errors.yourMessage?.message
                    ? "border-pink-700"
                    : "border-danger-50"
                } p-2.5 w-full text-sm border  rounded-lg shadow-sm  dark:bg-primary-50 text-white  `}
                placeholder="Leave a comment..."
                {...register("yourMessage")}
              ></textarea>
              {errors.yourMessage && (
                <p className="text-pink-700">{errors.yourMessage?.message}</p>
              )}
            </div>
            <div className="flex max-[800px]:flex-wrap justify-center gap-[1rem]">
              <button
                type="submit"
                value="Send"
                className="flex items-center py-3 px-5 text-sm text-center text-white hover:text-danger-50 rounded-lg border hover:border-danger-50"
              >
                <IconSend />
                Send message
              </button>
              <button
                onClick={handleClear}
                type="button"
                value="Send"
                className="flex items-center py-3 px-5 text-sm text-center text-white hover:text-pink-700  rounded-lg border hover:border-pink-700 "
              >
                <IconRecycle /> Clear
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
