import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../../supabase";

export default function Private({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (error || !user) {
        navigate("/Auth");
      }
    };

    checkUser();
  }, [navigate]);

  return <>{children}</>;
}
