import { useState, useMemo } from "react";
import { useRouter } from "next/router";

import Link from "next/link";
import { Logo, Grafico, Ticket, Pessoas, Livro, Cifrao, Nota } from "./icones";

const Sidebar = () => {
  const [menuItens, setMenuItens] = useState({
    1: {
      id: 1,
      label: "Visão Geral",
      icon: Grafico,
      link: "/",
      estaSelecionado: false,
    },
    2: {
      id: 2,
      label: "Cobranças",
      icon: Ticket,
      link: "/cobrancas",
      estaSelecionado: false,
    },
    3: {
      id: 3,
      label: "Relatório ao Fornecedor",
      icon: Pessoas,
      link: "/relatorio-fornecedor",
      estaSelecionado: false,
    },
    4: {
      id: 4,
      label: "Notas",
      icon: Livro,
      link: "/notas",
      estaSelecionado: false,
    },
    5: {
      id: 5,
      label: "Registrar Dívida",
      icon: Cifrao,
      link: "/registrar-divida",
      estaSelecionado: false,
    },
    6: {
      id: 6,
      label: "Registrar pag. ao Fornecedor",
      icon: Nota,
      link: "/registrar-pagamento",
      estaSelecionado: false,
    },
  });
  const [ultimoClicado, setUltimoClicado] = useState(null);
  const router = useRouter();

  const activeMenu = useMemo(
    () =>
      Object.values(menuItens).find((menu) => menu.link === router.pathname),
    [router.pathname]
  );

  const ativarSeletor = (index) => {
    const id = index;
    const menu = { ...menuItens };

    if (ultimoClicado && id !== ultimoClicado) {
      menu[ultimoClicado].estaSelecionado = false;
    }
    menu[id].estaSelecionado = true;
    setUltimoClicado(id);
    setMenuItens(menu);
  };
  return (
    <div
      className={`size pt-5 pb-4 bg-dark d-flex flex-column justify-content-start position-fixed overflow-auto col-2`}
    >
      <div className="px-4 d-flex align-items-center pl-1 gap-3">
        <Logo size={32} />
        <span className="logo-text">Fishme</span>
      </div>
      <div className="mt-5 d-flex flex-column justify-content-between ">
        {Object.values(menuItens).map(({ icon: Icon, ...menu }) => {
          return (
            <Link href={menu.link} key={menu.id}>
              <div
                className={`button-menu px-4 py-2 text-light d-flex align-items-center gap-3 ${
                  activeMenu.id === menu.id ? "button-actived" : ""
                }`}
                onClick={() => ativarSeletor(parseFloat(menu.id))}
              >
                <Icon
                  fill={activeMenu.id === menu.id ? "#DDE2FF" : "#838591"}
                  width="16"
                  height="16"
                />
                <span
                  className="button-text"
                  style={{
                    color: activeMenu.id === menu.id ? "#DDE2FF" : "#838591",
                  }}
                >
                  {menu.label}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
