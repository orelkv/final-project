const fs = require("fs");

module.exports = {
  syntax: "postcss-scss",
  parser: 'postcss-scss',
  plugins: [
    require("postcss-easy-import")({
      extensions: ".pcss"                     // удобное подключение файлов
    }),
    require("autoprefixer")({           /// автопрефиксер
      cascade: false
    }),
    require("postcss-advanced-variables")({             /// берет переменные из файла и резолвит их в файлы
      variables: JSON.parse(
        fs.readFileSync("./src/styles/variables.json", "utf-8")
      )
    }),
    require("postcss-nested"),            // использование вложенностей в тексте
    require("postcss-rgb"),               // чтобы передавать rgba (#ffffff, .5) в указанном формате
    require("postcss-inline-svg")({         // для вставки иконок svg  в css  путем указания только имен файлов
      removeFill: true,
      path: "./src/images/icons"
    }),
    require("cssnano"),             // сжатие css
    require("postcss-pxtorem")({        // для перевода все в rem
      rootValue: 16,                            // базовый размер
      propList: ["*", "!*border*"],         // преобразовывать все свойства, кроме того что содержит border
      selectorBlackList: [/^html$/, /^.container$/]         // не обработывать тег html
    })
  ]
};
