module.exports = {
  plugins: {
    // ...
    'postcss-px-to-viewport': {
      unitToConvert: 'px',
        viewportWidth: 375,  // 视窗的宽度，对应的是设计的宽度
				viewportHeight: 667, // 视窗的高度，对应的是设计的高度
        unitPrecision: 5,	// 指定转换后的小数位
        propList: ['*'],		
        viewportUnit: 'vw', // 指定转换后的单位
        fontViewportUnit: 'vw',  
        selectorBlackList: [], // 指定不需要转换的类名
        minPixelValue: 1,
        mediaQuery: false,
        replace: true,
        exclude: [/Tab/],  // 指定不需要包含的文件名，需要使用正则匹配
        include: undefined,
        landscape: false,
        landscapeUnit: 'vw',
        landscapeWidth: 568
    }
  }
}