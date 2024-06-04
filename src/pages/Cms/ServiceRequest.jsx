import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserQuestionsFromSupabase } from "../../Redux/store/UserQuestions";

export default function ServiceRequest() {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.userQuestions);

  useEffect(() => {
    dispatch(getUserQuestionsFromSupabase());
  }, [dispatch]);

  return (
    <div className="container mx-auto px-4 overflow-hidden">
      <h1 className="text-2xl font-bold mb-4">درخواست‌ها</h1>
      {status === "loading" && <div>در حال بارگذاری...</div>}
      {status === "failed" && <div>خطا: {error}</div>}
      {status === "succeeded" && (
        <div className="overflow-x-scroll ">
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 border-b text-right">شناسه</th>
                <th className="py-3 px-4 border-b text-right">تاریخ ایجاد</th>
                <th className="py-3 px-4 border-b text-right">نام</th>
                <th className="py-3 px-4 border-b text-right">نام خانوادگی</th>
                <th className="py-3 px-4 border-b text-right">ایمیل</th>
                <th className="py-3 px-4 border-b text-right">خدمات</th>
                <th className="py-3 px-4 border-b text-right">سوالات</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b text-right">{item.id}</td>
                  <td className="py-2 px-4 border-b text-right">
                    {new Date(item.created_at).toLocaleString()}
                  </td>
                  <td className="py-2 px-4 border-b text-right">
                    {item.firstName}
                  </td>
                  <td className="py-2 px-4 border-b text-right">
                    {item.lastName}
                  </td>
                  <td className="py-2 px-4 border-b text-right">
                    {item.email}
                  </td>
                  <td className="py-2 px-4 border-b text-right">
                    {item.service}
                  </td>
                  <td className="py-2 px-4 border-b text-right">
                    {item.questions}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
