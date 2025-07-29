# Links profundos e links de compartilhamento

Links profundos e links compartilhados ajudam a conectar o Sonolus com o mundo exterior.

## Links profundos

Links profundos são URLs que, ao serem clicados, levam o usuário ao aplicativo Sonolus e abrem o conteúdo vinculado.

Links profundos servem como mecanismo interno para guiar usuários do mundo externo (por exemplo, uma página da web) para o Sonolus. No entanto, eles não devem ser compartilhados diretamente, pois funcionam apenas para usuários que já possuem o aplicativo Sonolus instalado.

Links profundos são URLs regulares com esquema `sonolus` , que espelham de perto os endpoints Sonolus. Usando um servidor com endereço `https://example.com/server` como exemplo:

- `sonolus://example.com/server` abrirá o servidor.
- `sonolus://example.com/server/levels/list` abrirá a lista de níveis do servidor. Parâmetros de consulta se aplicam.
- `sonolus://example.com/server/levels/{name}` abrirá o nível do servidor de nome `{name}` .
- Da mesma forma para `skins` , `backgrounds` , `effects` , `particles` e `engines` .

## Compartilhar links

Links de compartilhamento são URLs que mostram informações do conteúdo vinculado em navegadores da web.

Os links de compartilhamento servem como um mecanismo público que permite aos usuários compartilhar conteúdos no Sonolus com o mundo exterior. No aplicativo Sonolus, os usuários podem usar os botões de compartilhamento para obter links de compartilhamento e publicá-los em sites, redes sociais, aplicativos de mensagens instantâneas, etc. Os destinatários podem então abrir os links de compartilhamento em navegadores da web para visualizar o conteúdo vinculado.

Os servidores devem implementar todos os links de compartilhamento como páginas da web que forneçam informações sobre os conteúdos vinculados, com um botão "abrir no Sonolus" que aciona o link profundo correspondente, bem como instruções para usuários que ainda não têm o aplicativo Sonolus instalado.

Links compartilhados são URLs comuns, que espelham de perto os endpoints do Sonolus. Usando um servidor com endereço `https://example.com/server` como exemplo:

- `https://example.com/server` deve exibir informações do servidor.
- `https://example.com/server/levels/list` deve exibir informações da lista de níveis do servidor. Parâmetros de consulta se aplicam.
- `https://example.com/server/levels/{name}` deve exibir informações do nível do servidor de nome `{name}` .
- Da mesma forma para `skins` , `backgrounds` , `effects` , `particles` e `engines` .
