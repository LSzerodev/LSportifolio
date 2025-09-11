import { createClient } from '../../../prismicio';
import ConteudoClient from './conteudoClient';

export default function ConteudoPage( { conteudo }: { conteudo: any[] } ) {
  return <ConteudoClient conteudo={conteudo} />;
}

export async function getServerSideProps() {
  const prismic = createClient();
  const conteudo = await prismic.getAllByType('conteudo');

  return {
    props: {
      conteudo,
    }
  };
}
