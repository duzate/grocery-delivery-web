"use client";
import { useAuth } from "@/contexts/Auth";
import "@/components/dropDownProfile.css";
import Link from "next/link";

export const DropDownProfile = () => {
  const { isAuth } = useAuth();

  return (
    <div className="flex flex-col dropDownProfile">
      {!isAuth ? (
        <div>
          <ul>
            <li>
              <Link className="font-semibold hover:text-blue-500" href="/login">
                Entrar
              </Link>{" "}
              ou{" "}
              <Link className="font-semibold hover:text-blue-500" href={'/register'} >
                Cadastrar
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div>
          <ul className="flex flex-col gap-1">
            <li>Meu perfil</li>
            <li>Meus pedidos</li>
            <li>Meus cupons</li>
          </ul>
        </div>
      )}
    </div>
  );
};
