'use client';
import Image from 'next/image'
import {Tab} from '@headlessui/react';
import {Formik, Form, Field, useFormik} from 'formik';
import * as Yup from 'yup';
import InputCom from "../components/InputCom";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const CalSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});
export default function Home() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const {
    handleChange,
    values,
    errors,
    setFieldValue,
  } = formik;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 md:p-24">
      <div className={'text-2xl md:text-4xl font-semibold text-center w-full bg-white py-2 rounded-xl max-w-screen-md'}>
        Công cụ tính thuế thu nhập cá nhân
      </div>

      <form className={'w-full max-w-screen-md flex-1 my-8'} onSubmit={formik.handleSubmit}>
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-white p-1">
            {['Theo tháng', 'Theo năm'].map((category) => (
              <Tab
                key={category}
                className={({selected}) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-blue-500 text-white shadow'
                      : 'text-blue-100 hover:bg-white/[0.12] hover:text-blue-700'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            <Tab.Panel
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <div className={'text-orange-400 mb-5'}>
                Nhập dữ liệu thu nhập theo tháng để biết số thuế tạm nộp hàng tháng.
              </div>
              <div className={'flex flex-col space-y-6'}>
                <InputCom
                  placeholder="Thu nhập tháng (thường tính bằng tiền lương ghi trên hợp đồng)"
                  label="Thu nhập tháng (thường tính bằng tiền lương ghi trên hợp đồng)"
                  name="price"
                  type="number"
                  minValue={0}
                  required={true}
                  inputClasses="h-[50px]"
                  error={errors.price}
                  inputHandler={handleChange}
                  value={values.price}
                />
                <InputCom
                  placeholder="Lương đóng bảo hiểm"
                  label="Lương đóng bảo hiểm"
                  name="price"
                  type="number"
                  minValue={0}
                  required={true}
                  inputClasses="h-[50px]"
                  error={errors.price}
                  inputHandler={handleChange}
                  value={values.price}
                />
                <InputCom
                  placeholder="Số người phụ thuộc"
                  label="Số người phụ thuộc"
                  name="price"
                  type="number"
                  minValue={0}
                  required={true}
                  inputClasses="h-[50px]"
                  error={errors.price}
                  inputHandler={handleChange}
                  value={values.price}
                />
              </div>
            </Tab.Panel>
            <Tab.Panel
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <div className={'text-orange-400 mb-5'}>
                Nhập dữ liệu thu nhập theo năm để biết quyết toán thuế sẽ được hoàn lại hay phải nộp thêm. Dữ liệu này thường căn cứ trên chứng từ khấu trừ thuế thu nhập cá nhân do công ty cấp cho.
              </div>
              <div className={'flex flex-col space-y-6'}>
                <InputCom
                  placeholder="Tổng thu nhập"
                  label="Tổng thu nhập"
                  name="price"
                  type="number"
                  minValue={0}
                  required={true}
                  inputClasses="h-[50px]"
                  error={errors.price}
                  inputHandler={handleChange}
                  value={values.price}
                />
                <InputCom
                  placeholder="Tổng tiền bảo hiểm bắt buộc đã đóng"
                  label="Tổng tiền bảo hiểm bắt buộc đã đóng"
                  name="price"
                  type="number"
                  minValue={0}
                  required={true}
                  inputClasses="h-[50px]"
                  error={errors.price}
                  inputHandler={handleChange}
                  value={values.price}
                />
                <InputCom
                  placeholder="Số người phụ thuộc"
                  label="Số người phụ thuộc"
                  name="price"
                  type="number"
                  minValue={0}
                  required={true}
                  inputClasses="h-[50px]"
                  error={errors.price}
                  inputHandler={handleChange}
                  value={values.price}
                />
                <InputCom
                  placeholder="Số tháng phụ thuộc"
                  label="Số tháng phụ thuộc"
                  name="price"
                  type="number"
                  minValue={0}
                  required={true}
                  inputClasses="h-[50px]"
                  error={errors.price}
                  inputHandler={handleChange}
                  value={values.price}
                />
                <InputCom
                  placeholder="Số thuế TNCN đã khấu trừ"
                  label="Số thuế TNCN đã khấu trừ"
                  name="price"
                  type="number"
                  minValue={0}
                  required={true}
                  inputClasses="h-[50px]"
                  error={errors.price}
                  inputHandler={handleChange}
                  value={values.price}
                />
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </form>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
