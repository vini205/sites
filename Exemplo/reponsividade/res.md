# Unidades CSS

1. **layout fixo**
`px`-
2. __layout fluido__
`%` - porcentagem
`auto`- automática
`vh`- Viewport Height //Parte da ela que é vista 
`vw`- viewport Width  // vai de 0 à 100
## Tip
 `font-size:62.5%;/* faz com que 1px seja 1 rem e 16 1.6rem e fique responsivo*/`
3. Textos fixos
1px = 0.75 pt
16px = 12pt(word)
4. __textos Fluidos__
`em` - multiplicado pelo pai{
     li   font-size:12px;
     li a{ font-size: 2em **equivalente a 12*2=24px**}
     }
}
`rem` - Multiplicado pelo _root_ O principal(html)
# Grid:
     repeat, cria sem precisar escrever cada um
     numero de colunas pode ser **auto-fit**
     o tamanho de cada uma, podendo usar minmax(min, max)

**order**- _propriedade de elementos para faz-los mudar de lugar no escopo html_     

# Media Queries
# HTML Media Attribute
_Media='(width:600px)'_
# Images
## Picture
     **source** 
     1.   media='' regra
     2.   srcset='' imagem que aparecera se a media for TRUE.
          media='(min-width:300px)' srcset='img.png'
