import React, {useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';

import {StatusBar, ScrollView, View} from 'react-native';

import {
  Body,
  ButtonText,
  TextStyle,
  TextInputStyle,
  ViewStyle,
  ConfirmButton,
} from './styles';
import Entypo from 'react-native-vector-icons/dist/Entypo';

import HeaderGradient from '../../../shared/components/HeaderGradient/index';

var timer;

export default function Termos() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.addListener('focus', () => {
      StatusBar.setBarStyle('light-content');
    });
  });

  return (
    <>
      <HeaderGradient
        page2
        onBackPress={() => navigation.goBack()}
        name={'Termos e privacidade'}
      />

      <Body>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'space-between',
          }}>
          <TextStyle h1>
            Termos e condições de Uso e Política de privacidade
          </TextStyle>
          <TextStyle>
            Prezado(a) cliente {'\n\n'}Bem-vindo ao Aplicativo MDS.{'\n\n'} O
            aplicativo da MDS (Aplicativo) foi desenvolvido pela Lazam-MDS
            Corretora e Administradora de Seguros S/A, inscrita no CNPJ nº
            48.114.367/0001-62, o qual concede (1) possibilitar que o cliente
            consulte seus produtos adquiridos na MDS (apólices e endossos); (2)
            que o cliente tenha acesso a todos os meios de contatos da MDS:
            telefônico, WhatsApp e e-mail; (3) que o cliente adquira promoções
            ao participar de funcionalidades exclusivas (QrCode e Indicações);
            que o cliente adquira produtos e serviços oferecidos pela MDS
            (seguros e assistências).
          </TextStyle>
          <TextStyle>
            A aceitação livre, expressa e sem reservas, de todos os itens destes
            Termos de Uso e Política de Privacidade (Termos), se dará no ato do
            clique no Usuário, na versão publicada no momento da utilização do
            Aplicativo. O Usuário concorda e permite acesso às suas informações
            a partir de seu primeiro acesso, sendo que o Usuário deverá sempre
            ler atentamente estes Termos, em cada ocasião em que utilizar o
            Aplicativo, pois estes podem sofrer modificações quantas vezes forem
            necessárias. Caso o Usuário não aceite ou não concorde com quaisquer
            das disposições dos Termos abaixo ou quaisquer alterações realizadas
            nestes, deverá se abster de utilizar o Aplicativo.
          </TextStyle>
          <TextStyle>
            Caso queira tirar dúvida, registrar reclamação, sugestão ou
            comentário, que o usuário tenha em relação a estes Termos ou ao
            Aplicativo, poderá ser direcionado ao e-mail
            developer@mdsinsure.com.
          </TextStyle>
          <TextStyle h1>
            <TextStyle sub>1. TERMO DE USO {'\n\n'}</TextStyle>
            {'\t\t\u2B24\t '} Condições para Acesso
          </TextStyle>
          <TextStyle>
            A utilização do Aplicativo e de suas ferramentas, exige a prévia
            inscrição e o registro do Usuário no ato da instalação. Portanto, é
            obrigação do Usuário informar todos os dados solicitados no momento
            do cadastro no Aplicativo, com precisão e veracidade, sendo vedada a
            inserção de dados de terceiros.
          </TextStyle>
          <TextStyle>
            O Aplicativo não poderá ser utilizado por Usuários incapazes, exceto
            mediante autorização prévia de seus responsáveis legais, que deverão
            aceitar estes Termos.
          </TextStyle>
          <TextStyle>
            O Aplicativo será fornecido de forma gratuita e não é oferecida
            qualquer garantia, implícita ou explícita, de qualquer natureza,
            seja em relação ao seu funcionamento, seja em relação à
            disponibilidade das informações.
          </TextStyle>
          <TextStyle h1>{'\t\t\u2B24\t '} Senha</TextStyle>
          <TextStyle>
            Para verificação de acesso ao Aplicativo, é de responsabilidade
            exclusiva do Usuário a escolha de senha segura, contendo números,
            caracteres maiúsculos, minúsculos e especiais (símbolos: !#$&@,
            entre outros). Está senha é pessoal e não deve ser divulgada para
            terceiros, para quaisquer fins ou sob qualquer pretexto.
          </TextStyle>
          <TextStyle h1>{'\t\t\u2B24\t '} Propriedade Intelectual</TextStyle>
          <TextStyle>
            Esclarecemos ao Usuário que os direitos sobre todos os componentes
            do Aplicativo, tais como arquivos de dados, textos, programas,
            arquivos de áudio, fotografias, vídeos, imagens e outros, a este não
            se limitando (denominados coletivamente de “Conteúdo), são de
            propriedade da Lazam-MDS Corretora e Administradora de Seguros S/A
            ou de empresas parceiras reproduzidos sob autorização, quando
            aplicável.
          </TextStyle>
          <TextStyle h1>
            {'\t\t\u2B24\t '} Garantia e exclusão de dados
          </TextStyle>
          <TextStyle>
            A MDS esclarece que as informações disponíveis neste Aplicativo, são
            somente para conhecimento e acompanhamento do Usuário. Desta forma,
            a MDS não garante disponibilidade a qualquer tempo das informações
            do Aplicativo, podendo ser também excluídas, a qualquer momento,
            independentemente de qualquer aviso. Por esta razão, caso o Usuário
            queira, este é o único responsável por manter cópia de suas próprias
            informações, disponibilizadas no Aplicativo. Assim como, o Usuário é
            responsável por ratificar os dados apresentados, antes de tomar
            qualquer atitude baseada neles. A MDS não será responsável, em
            hipótese alguma, por qualquer dano decorrente da interrupção de
            acesso ao Aplicativo, independentemente do motivo que cause essa
            suspensão, quer ocorra por culpa de terceiros ou não.
          </TextStyle>
          <TextStyle>
            O Usuário isenta a MDS de qualquer responsabilidade decorrente do
            mau uso do Aplicativo e responderá na forma da lei por todos os
            danos e prejuízos que causar à MDS decorrentes da transmissão,
            difusão, disponibilização, recepção, obtenção ou acesso ao Conteúdo
            e que decorram, entre outros: <TextStyle bold>(i)</TextStyle> do
            descumprimento da lei, da moral, dos bons costumes geralmente
            aceitos ou da ordem pública; <TextStyle bold>(ii)</TextStyle> da
            infração aos direitos de propriedade intelectual e industrial, dos
            segredos empresariais, dos compromissos contratuais de qualquer
            tipo, dos direitos à honra, à intimidade pessoal e familiar, à
            imagem das pessoas, dos direitos de propriedade e de toda e qualquer
            natureza pertencentes a um terceiro;{' '}
            <TextStyle bold>(iii)</TextStyle> da realização de atos de
            concorrência desleal e publicidade ilícita;{' '}
            <TextStyle bold>(iv)</TextStyle> da falta de veracidade, precisão,
            exatidão, pertinência e/ou atualidade do Conteúdo e informações
            apresentadas pelo Usuário; <TextStyle bold>(v)</TextStyle> da
            inadequação para qualquer tipo de propósito e utilização indevida do
            Aplicativo, ou da frustração, das expectativas geradas pelo
            Conteúdo; <TextStyle bold>(vi)</TextStyle> da interrupção de acesso
            ao Aplicativo, independentemente do motivo que cause essa suspensão,
            ou da presença de elementos nocivos no Aplicativo.
          </TextStyle>
          <TextStyle h1>{'\t\t\u2B24\t '} Disponibilidade</TextStyle>
          <TextStyle>
            O Aplicativo estará disponível por tempo indeterminado, podendo a
            MDS, a seu exclusivo critério, a qualquer momento e
            independentemente de motivo ou aviso prévio, excluir perfis, negar,
            suspender ou descontinuar, temporária ou definitivamente, o acesso
            de Usuários ao Aplicativo, sem que seja devida qualquer indenização
            ou compensação a referidos Usuários.
          </TextStyle>
          <TextStyle h1>
            <TextStyle sub>
              2. POLÍTICA DE PRIVACIDADE
              {'\n\n'}
            </TextStyle>
            {'\t\t\u2B24\t '} Informações coletadas e armazenadas
          </TextStyle>
          <TextStyle>
            O Aplicativo da MDS utiliza recursos disponíveis no equipamento,
            como uso de impressão digital para identificação do usuário, uso da
            câmera, leitura do estado do dispositivo/equipamento, acesso ao
            estado da rede utilizada e acessa a lista de contatos do WhatsApp.
            Porém, a MDS não coletadas ou armazenadas, nenhuma
            informação/imagem/contatos donWhatsApp destes dispositivos.
          </TextStyle>
          <TextStyle>
            Entretanto, coleta e armazena somente os dados fornecidos
            espontaneamente pelo Usuário durante a sua utilização do Aplicativo,
            como, por exemplo, Geolocalização, informações públicas do perfil do
            Facebook e comunicação de dados analíticos através do Google
            Firebase Analitics.
          </TextStyle>
          <TextStyle>
            Quando o cliente optar pela contratação de serviços, o Aplicativo
            MDS enviará as informações pertinentes com permissão prévia para
            API´s¹ de terceiros. Os dados de contato permitiram que a MDS possa
            entrar em contato, podendo ser por meio telefônico, WhatsApp e
            e-mail.
          </TextStyle>
          <TextStyle>
            Assim, o Usuário desde já se encontra ciente acerca das informações
            coletadas pelo Aplicativo e expressa consentimento livre, expresso e
            informado com relação à coleta de tais informações.
          </TextStyle>
          <TextStyle h1>
            {'\t\t\u2B24\t '} Como utilizamos as informações coletadas
          </TextStyle>
          <TextStyle>
            As informações coletadas no Aplicativo serão utilizadas pela MDS
            para atualização de dados, estatísticas e mapeamento do perfil e
            necessidades dos Usuários, a fim de personalizar e aprimorar a
            oferta de produtos e serviços pela MDS. Todas as informações
            coletadas poderão ser tratadas para fins de pesquisa científica ou
            estatística, sempre de forma a respeitar os direitos dos Usuários.
          </TextStyle>
          <TextStyle>
            As informações constantes no Aplicativo poderão ser repassadas a
            terceiros, e anonimizadas para utilização de fins estatísticos e
            publicitários, garantindo que não será possível a identificação do
            Usuário por meio dos dados fornecidos, no que o Usuário, desde logo,
            dá o consentimento livre, expresso e informado para tanto, nos
            termos exigidos pela Lei Nº 12.965/2014, Marco Civil da Internet.
          </TextStyle>
          <TextStyle mini>
            ¹ API é um conjunto de rotinas e padrões de programação para acesso
            a um aplicativo de software ou plataforma baseado na Web. A sigla
            API refere-se ao termo em inglês "Application Programming Interface"
            que significa na tradução para o português "Interface de Programação
            de Aplicativos".
          </TextStyle>
          <TextStyle>
            Qualquer informação coletada poderá ser excluída, quando deixar de
            ser necessária ou pertinente para a finalidade que justificou a sua
            coleta e tratamento, sendo certo que nenhum dado pessoal trafegará
            pelo Aplicativo ou será armazenado em qualquer local, físico ou
            remoto, após a sua exclusão. O Usuário poderá desinstalar o
            Aplicativo a qualquer momento ou deixar de utilizá-lo, portanto deve
            estar ciente de que, mesmo nestes últimos casos, a MDS respeitará o
            prazo de armazenamento mínimo de informações determinado pela
            legislação brasileira.
          </TextStyle>
          <TextStyle h1>
            {'\t\t\u2B24\t '} As informações coletadas poderão ser
            compartilhadas
          </TextStyle>
          <TextStyle>
            As informações coletadas são tratadas pela MDS são classificadas
            como sigilosas, e todos os colaboradores MDS tomaram ciência através
            de termo de sigilo e confidencialidade, se comprometendo em não
            desvirtuar a sua utilização, da mesma forma desrespeitar os
            requisitos previstos nesta Política de Privacidade.
          </TextStyle>
          <TextStyle>
            O Usuário concorda expressamente que a MDS poderá compartilhar seus
            dados com as Companhias Seguradoras e/ou autoridade responsável,
            definida pela Lei Geral de Proteção de Dados, nas seguintes
            hipóteses: <TextStyle bold>(i)</TextStyle> na aquisição de um novo
            serviço pelo Usuário e/ou
            <TextStyle bold>(ii)</TextStyle> para atendimento de exigência
            judicial ou extrajudicial.
          </TextStyle>
          <TextStyle h1>
            {'\t\t\u2B24\t '} Armazenamos as informações coletadas
          </TextStyle>
          <TextStyle>
            São adotadas pela MDS precauções na guarda e tratamento das
            informações dos Usuários: <TextStyle bold>(a)</TextStyle> utilizamos
            os métodos padrões e de mercado para anonimizar os dados coletados;
            <TextStyle bold> (b)</TextStyle> possuímos software de proteção
            contra acesso não autorizado aos nossos sistemas;
            <TextStyle bold> (c)</TextStyle> somente autorizamos o acesso de
            pessoas previamente estabelecidas aos locais onde armazenamos as
            informações; e <TextStyle bold>(d)</TextStyle> aqueles que entrarem
            em contato com as informações deverão se comprometer a manter sigilo
            absoluto. A quebra do sigilo acarretará responsabilidade civil e o
            responsável será processado nos moldes da legislação brasileira.
          </TextStyle>
          <TextStyle>
            Tais precauções, no entanto, não garantem integralmente que todas as
            informações que trafegam no Aplicativo não sejam acessadas por
            terceiros mal intencionados, por meio de métodos desenvolvidos para
            obter informações de forma indevida. Em razão disso, a MDS não se
            responsabiliza por acessos ilícitos, bem como por atos de terceiros
            que logrem êxito em coletar ou utilizar, por quaisquer meios, dados
            cadastrais e informações disponibilizadas no Aplicativo pelo
            Usuário.
          </TextStyle>
          <TextStyle>
            As informações ficarão armazenadas em servidores localizados no
            Brasil, atendendo as legislações e melhores práticas aplicáveis de
            proteção de dados, incluindo a Lei Geral de Proteção de Dados
            Pessoais (Lei nº 13.709/2018).
          </TextStyle>
          <TextStyle h1>
            {'\t\t\u2B24\t '} As informações coletadas poderão ser
            compartilhadas
          </TextStyle>
          <TextStyle>
            Em caso de qualquer alteração com relação ao tratamento que damos às
            informações, os Usuários serão comunicados previamente, por meio de
            e-mail cadastrado no Aplicativo, sobre tais alterações, devendo
            deixar de utilizar o Aplicativo caso não concordem com quaisquer
            modificações nesta Política de Privacidade.
          </TextStyle>
          <TextStyle h1>
            <TextStyle sub>
              3. DISPOSIÇÕES GERAIS
              {'\n\n'}
            </TextStyle>
            {'\t\t\u2B24\t '} Legislação e Foro
          </TextStyle>
          <TextStyle>
            Este termo será regido, interpretado e executado de acordo com as
            leis da República Federativa do Brasil, independentemente dos
            conflitos dessas leis com leis de outros estados ou países, sendo
            competente o Foro de São Paulo, para dirimir qualquer dúvida
            decorrente deste instrumento. O Usuário consente, expressamente, com
            a competência desse juízo, e renúncia, neste ato, à competência de
            qualquer outro foro, por mais privilegiado que seja ou venha a ser.
          </TextStyle>
          <TextStyle h1>{'\t\t\u2B24\t '} Contato</TextStyle>
          <TextStyle>
            Caso seja necessário contatarmos o usuário, est contato será
            realizado por meio do endereço de e-mail informado quando de seu
            cadastro no Aplicativo, ou por meio de mensagens disponibilizadas no
            próprio Aplicativo.
          </TextStyle>
          <TextStyle>
            Em caso de dúvidas, sugestões ou reclamações, o Usuário pode
            contatar a MDS por meio do e-mail: developer@mdsinsure.com.
          </TextStyle>
        </ScrollView>
      </Body>
    </>
  );
}
