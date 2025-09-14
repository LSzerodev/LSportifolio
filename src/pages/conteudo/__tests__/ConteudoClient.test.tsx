import { render, screen } from '@testing-library/react';
import ConteudoClient from '../conteudoClient'; // ajuste o caminho conforme necessário

test('deve renderizar o título corretamente', () => {
  render(<ConteudoClient />);
});
