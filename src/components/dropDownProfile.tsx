"use client";
import { useAuth } from "@/contexts/Auth";
import "@/components/dropDownProfile.css";

export const DropDownProfile = () => {
  const { isAuth } = useAuth();

  return (
    <div className="flex flex-col dropDownProfile">
      {!isAuth ? (
        <div>
          <ul>
            <li>
              <a className="font-semibold hover:text-blue-500" href="/login">
                Entrar
              </a>{" "}
              ou{" "}
              <a className="font-semibold hover:text-blue-500" href="">
                Cadastrar
              </a>
            </li>
          </ul>
        </div>
      ) : (
        <div>
          <ul>
            <li></li>
          </ul>
        </div>
      )}
    </div>
  );
};
