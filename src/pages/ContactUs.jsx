import Path from "../components/Path/Path";
import Form from "../components/Form/Form";

export default function ContactUs() {
  return (
    <div className="px-4 sm:px-14">
      <Path />
      <div className="flex justify-evenly flex-wrap gap-5 *:flex *:items-center *:gap-2 my-14">
        <div>
          <img src="src/assets/images/Contact-us/email.png" alt="" />
          <p>rshorche@gmai.com</p>
        </div>{" "}
        <div>
          <img src="src/assets/images/Contact-us/map.png" alt="" />
          <p>123 Anywhere Street, Any City, 12345 ST, Indonesia</p>
        </div>
        <div>
          <img src="src/assets/images/Contact-us/call.png" alt="" />
          <p>0937-745-7370</p>
        </div>
      </div>

      <div>
        <h2 className="text-5xl text-center">اطلاعات تماس ما</h2>
        <p className="text-sm text-center mt-2">
          ما از اینکه ازت خبر داشته باشیم خوشحال میشویم! لطفا فرم زیر را پر کنید
          و ما در اسرع وقت با شما تماس خواهیم گرفت.
        </p>
        <Form />
      </div>
    </div>
  );
}
