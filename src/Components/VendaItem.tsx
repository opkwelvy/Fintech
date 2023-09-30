import React from 'react';
import { IVendas } from '../Context/DataContext';
import { NavLink } from 'react-router-dom';

const VendaItem = ({ vendas }: { vendas: IVendas }) => {
  return (
    <div className="box venda">
      <NavLink to={`/venda/${vendas.id}`} style={{ fontFamily: 'monospace' }}>
        {vendas.id}
      </NavLink>
      <div>{vendas.nome}</div>
      <div>
        {vendas.preco.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        })}
      </div>
    </div>
  );
};

export default VendaItem;
