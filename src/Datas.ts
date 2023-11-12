export interface INews{
    title:string,
    text:string,
    image:string,
    likes:number,
    comments:number
}


export const news :Array<INews> =[
    {
        title:'Noticia 1',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, sint cupiditate vero quidem aliquid delectus sapiente praesentium accusantium ipsum recusandae repudiandae, dolore eveniet at temporibus facilis quaerat et ab labore.',
        image:'https://avatars.githubusercontent.com/u/130992999?s=400&v=4',
        likes: 2,
        comments:3,
    },
    {
        title:'Noticia 2',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, sint cupiditate vero quidem aliquid delectus sapiente praesentium accusantium ipsum recusandae repudiandae, dolore eveniet at temporibus facilis quaerat et ab labore.',
        image:'https://avatars.githubusercontent.com/u/130992999?s=400&v=4',
        likes: 2,
        comments:3,
    },
    {
        title:'Noticia 3',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, sint cupiditate vero quidem aliquid delectus sapiente praesentium accusantium ipsum recusandae repudiandae, dolore eveniet at temporibus facilis quaerat et ab labore.',
        image:'https://avatars.githubusercontent.com/u/130992999?s=400&v=4',
        likes: 2,
        comments:3,
    }
]

