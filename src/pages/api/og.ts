import type { APIRoute } from 'astro'
import { readFileSync } from 'fs'
import { default as satori, type Font } from 'satori'

export const config = {
  runtime: 'edge'
}

export const GET: APIRoute = async ({ url }) => {
  const { origin, searchParams } = url,
    title = searchParams.get ('title'),
    Manrope = {
      name: 'Manrope',
      data: readFileSync(`${process.cwd()}/public/fonts/Manrope-ExtraBold.ttf`),
      weight: 800
    } satisfies Font

  try {
    return new Response(await satori({
      type: 'div',
      props: {
        children: [
          {
            type: 'span',
            props: {
              children: [
                'əkrəm',
                {
                  type: 'span',
                  props: {
                    children: '.',
                    style: {
                      color: '#ABABAB'
                    }
                  }
                }
              ],
              style: {
                position: 'absolute',
                top: '3rem',
                fontSize: '3rem'
              }
            }
          },
          {
            type: 'span',
            props: {
              children: title,
              style: {
                fontSize: '6rem',
                color: 'white'
              }
            }
          }
        ],
        style: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '3rem',
          backgroundColor: 'black',
          backgroundImage: `url(${origin}/assets/grid.svg)`,
          color: 'white',
          width: '100%',
          height: '100%'
        }
      }
    }, {
      width: 1920,
      height: 1080,
      fonts: [Manrope]
    }),
    {
      headers: {
        'Content-Type': 'image/svg+xml'
      }
    })
  } catch ({ message }: any) {
    return new Response(`Failed to generate the image: ${message}`, {
      status: 500,
    })
  }
}