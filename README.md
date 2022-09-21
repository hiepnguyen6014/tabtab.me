## First, run the development server:

```
git clone source
yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


### Environment variables 
rename `.env.development` or `.env.local` to `.env`
## Project Structure (Vietnamese)

```
public\                   # Các phần phục vụ SEO
 |--images\               # Ảnh
 |--static\               # Các file config
    |--locales\           # Config ngôn ngữ
    
src\
 |--@components\          # Các Components tái sử dụng
    |--layout\            # Các Components tầm trung được ghép từ các Components siêu nhỏ (shared)
    |--pages\             # Các Pages được ghép từ các Components tầm trung (layout)
    |--shared\            # Các Components siêu nhỏ (Buttons, Selecter, Title, Content...)

 |--@core\                # Chứa Logic hệ thống được tái sử dụng
    |--constants\         # Các biến constants không đổi
    |--context\           # Cấu trúc dữ liệu DataContext
    |--services\          # Giao tiếp API
    |--types\             # Interface quy định các props truyền vào component
    |--utils\             # Các Fuction hay sử dụng

 |--@pages\               # Quy định page được hiển thị với router nào

 |--@styles\              # Các Styles được tái sử dụng và các Style cục bộ
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You caan check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
