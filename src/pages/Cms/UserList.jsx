import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersFromSupabase } from "../../Redux/store/userSlice";

export default function UserList() {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsersFromSupabase());
  }, [dispatch]);

  useEffect(() => {
    console.log("Data:", data);
    console.log("Status:", status);
    console.log("Error:", error);
  }, [data, status, error]);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">لیست کاربران</h1>
      {status === "loading" && <div>در حال بارگذاری...</div>}
      {status === "failed" && <div>خطا: {error}</div>}
      {status === "succeeded" && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">ایمیل</th>
                <th className="py-2 px-4 border-b">تاریخ ایجاد</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user) => (
                <tr key={user.id}>
                  <td className="py-2 px-4 border-b">{user.id}</td>
                  <td className="py-2 px-4 border-b">{user.email}</td>
                  <td className="py-2 px-4 border-b">
                    {new Date(user.created_at).toLocaleString()}
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
