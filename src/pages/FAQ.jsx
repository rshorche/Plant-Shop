import { useState } from "react";
import Path from "../components/Path/Path";

export default function FAQ() {
  const [activeMenu, setActiveMenu] = useState("همه");

  const [questions, setQuestions] = useState([
    {
      id: 1,
      isOpen: true,
      title: "چه روش های پرداختی را می پذیرید؟",
      description:
        "خدمات اجاره کارخانه ما شامل مجموعه ای از گیاهان با کیفیت بالا و کم نگهداری است که برای هر محیط داخلی مناسب هستند. از گیاهان کوچک رومیزی گرفته تا قطعات بزرگ، ما طیف وسیعی از گزینه ها را متناسب با نیازهای شما داریم. گیاهان ما از پرورش دهندگان محلی تهیه می شوند و برای سلامت و زیبایی آنها با دقت انتخاب می شوند.",
      category: "سوالات پرداخت",
    },
    {
      id: 2,
      isOpen: false,
      title: "چند وقت یکبار باید گیاهانم را آبیاری کنم؟",
      description:
        "در فصل گرمی مانند تابستان، گیاهانی که در خارج از منزل قرار دارند باید بیشتر از گیاهان داخل آبیاری شوند و این مقدار به ویژه در دماهای بالای 20 درجه سانتیگراد می‌تواند به 2 بار در روز نیز برسد",
      category: "سوالات محصول",
    },
    {
      id: 3,
      isOpen: false,
      title: "آیا حمل و نقل بین المللی را ارائه می دهید؟",
      description:
        "شرکت‌های حمل و نقل بین‌المللی دارای فعالیت مختلفی هستند. با این وجود، فعالیت‌های اصلی شرکت‌های حمل و نقل بین‌المللی را می‌توان به دو گروه تقسیم نمود. ",
      category: "سوالات عمومی",
    },
    {
      id: 4,
      isOpen: false,
      title: "چگونه از گیاه جدیدم مراقبت کنم؟",
      description:
        "آبیاری یکی از مهمترین جنبه های مراقبت از گیاهان است. گیاهان در فضای باز به آبیاری منظم به ویژه در هوای گرم و خشک نیاز دارند. آبیاری عمیق گیاهان بسیار مهم است تا آب به ریشه ها برسد. آبیاری در اوایل صبح یا اواخر بعد از ظهر ایده آل است زیرا به گیاهان اجازه می دهد تا آب را قبل از تبخیر در گرمای روز جذب کنند.",
      category: "سوالات محصول",
    },
    {
      id: 5,
      isOpen: false,
      title: "چه سایز کاشت را برای گیاهم انتخاب کنم؟",
      description:
        "اصول طراحی کاشت گیاهان علفی و گیاهان پوششی      کاشتن گیاهان دائمی که نسبتا سایز متوسطی دارند: 4 تا 11 عدد کاشته شود. کاشتن گیاهان دائمی که نسبتا سایز کوچک‌تری دارند: 11 تا 25 عدد کاشته شود",
      category: "سوالات محصول",
    },
    {
      id: 6,
      isOpen: false,
      title: "آیا پرداخت در محل هم دارید؟",
      description: "بله، پرداخت در محل هم داریم",
      category: "سوالات پرداخت",
    },
    {
      id: 7,
      isOpen: false,
      title: "آیا طرح های پرداخت یا گزینه های تامین مالی را ارائه می دهید؟",
      description:
        "به هزینه‌های مالی و زمانی راه های تامین سرمایه، کسب‌وکارهای مختلف مایلند بدانند که ساده ترین روش های تامین مالی چیست تا با انتخاب درست بتوانند هزینه‌های خود را به حداقل رسانده و احتمال موفقیت کسب‌وکار خود را بیشتر کنند",
      category: "سوالات پرداخت",
    },
    {
      id: 8,
      isOpen: false,
      title: "گیاهان من به چه مقدار نور نیاز دارند؟",
      description:
        "شدت نور مورد نیاز اغلب گیاهان گلخانه 70000-10000 لوکس می باشد. در گیاهان سایه پسند بیشترین نور برای فتوسنتز 5000-4000 لوکس و کمترین آن 500 لوکس است. کمترین میزان نور برای فتوسنتز گیاهان آفتاب پسند 1000-1500 لوکس است.",
      category: "سوالات محصول",
    },
  ]);

  const questionMenus = [
    "همه",
    "سوالات عمومی",
    "سوالات محصول",
    "سوالات پرداخت",
  ];

  const filterdMenus = questions.filter((post) => {
    if (post.category === activeMenu) {
      return post;
    }
    if (activeMenu === "همه") {
      return post;
    }
  });

  function toggleQuestion(title) {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) => {
        if (question.title === title) {
          return { ...question, isOpen: !question.isOpen };
        }
        return question;
      })
    );
  }

  return (
    <div className="px-4 sm:px-14">
      <Path />
      <div className="max-w-3xl text-center mx-auto *:mb-5">
        <h2 className="text-5xl">سوالات متداول </h2>
        <p className="text-sm">
          ما می خواهیم مطمئن شویم که شما تمام اطلاعات مورد نیاز برای تصمیم گیری
          آگاهانه در مورد خرید و مراقبت گیاه خود را دارید. در اینجا برخی از
          سوالات رایجی که از مشتریان خود دریافت می کنیم وجود دارد:
        </p>
      </div>
      <div className="my-8">
        <ul className="flex justify-center flex-wrap gap-4 md:cursor-pointer">
          {questionMenus.map((menu) => (
            <li
              key={menu}
              onClick={(e) => setActiveMenu(e.target.innerHTML)}
              className={`py-2 md:py-4 px-3 md:px-10 rounded-full text-xs md:text-base transition-all ${
                menu === activeMenu
                  ? "text-orange border bg-none "
                  : "text-black bg-gray/10 border-none"
              }`}>
              {menu}
            </li>
          ))}
        </ul>
      </div>
      <div className="max-w-2xl mx-auto">
        {filterdMenus.map((question) => (
          <div
            key={question.id}
            className={`p-8 mb-8 border rounded-2xl ${
              question.isOpen ? "bg-cream" : "bg-white"
            }`}>
            <h3
              className="text-xl cursor-pointer"
              onClick={(e) => toggleQuestion(e.target.innerHTML)}>
              {question.title}
            </h3>
            <p
              className={`text-sm text-gray ${
                question.isOpen ? "block" : "hidden"
              }`}>
              {question.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
