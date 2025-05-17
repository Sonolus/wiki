# Visão geral

Uma visão geral dos servidores personalizados do Sonolus.

## Tecnologias

Os servidores personalizados do Sonolus são alimentados por tecnologias como HTTP/HTTPS, WebSocket, JSON, SHA e RSA.

Essas tecnologias são padrão da indústria, testadas em campo, amplamente adotadas e independentes de idioma. Elas permitem que você trabalhe com sua linguagem e ferramentas favoritas sem ficar limitado ao que a equipe da Sonolus utiliza.

## Servidor Web

Um servidor personalizado do Sonolus é fundamentalmente um servidor web, com um conjunto de endpoints predefinidos que o aplicativo Sonolus entende.

Isso permite que o desenvolvimento de servidores personalizados do Sonolus seja flexível, já que você pode usar qualquer framework de desenvolvimento web existente. Também é possível usar um host estático servindo arquivos, permitindo que você hospede seu próprio servidor personalizado sem a necessidade de conhecimento de programação.

Um servidor personalizado do Sonolus atua como um provedor passivo de informações: quando o usuário interage com o aplicativo Sonolus e determinado evento ocorre, o aplicativo inicia a comunicação com o servidor. Não há mecanismo nem necessidade de comunicação entre o servidor e o cliente.
