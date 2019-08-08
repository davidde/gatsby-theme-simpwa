import React from 'react'
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from dynamically adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */

import Layout from '../components/layout'
import Leftside from '../components/sidebar/leftside'
import Rightside from '../components/sidebar/rightside'
import Main from '../components/main/main'


export default () => (
  <Layout>
    <Rightside title='Home' icon={faHome} >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius semper ligula, eu luctus nunc mollis in. Vestibulum vulputate metus metus, id rutrum magna imperdiet nec. Aenean at pharetra risus. Integer convallis ac enim id aliquet. Mauris pharetra mollis nulla, eget posuere mi accumsan eu. Curabitur urna nisl, varius rhoncus tristique et, egestas et augue. Vivamus ac libero faucibus, vehicula quam in, posuere felis. Aliquam erat volutpat. Maecenas pretium iaculis dui sed elementum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.
      </p><br/>

      <p>
        Aliquam erat volutpat. Integer suscipit nisl ut mauris maximus, sed blandit nulla consequat. In a ipsum feugiat, lobortis enim in, pharetra sem. In varius nunc non nibh elementum porta pharetra vel neque. Integer lobortis odio vulputate arcu mollis, sit amet tincidunt dolor dignissim. Ut nec massa mollis, tristique leo vitae, bibendum dui. Donec volutpat mauris neque, lacinia lobortis est sodales quis. Cras sem lacus, molestie ac ullamcorper ut, suscipit eu lorem. Maecenas vehicula quam et urna elementum imperdiet. Suspendisse eu nibh eget mi porttitor tincidunt vitae eget tortor. Aliquam facilisis tincidunt tempus. Vestibulum porttitor pretium eros eget fermentum. Praesent eget iaculis elit. Suspendisse vitae ultricies orci, sit amet semper mauris. Ut eu laoreet purus.
      </p><br/>

      <p>
        Aenean ut felis finibus, aliquet mi a, feugiat felis. Donec porta, odio et vulputate laoreet, nibh odio iaculis mi, et ornare nulla orci vitae ligula. Sed mi velit, aliquam sit amet efficitur eget, scelerisque vel ligula. Aliquam finibus erat nec accumsan posuere. Vestibulum rhoncus, velit vitae volutpat vehicula, leo orci faucibus eros, at ornare nibh nunc nec mi. Donec porttitor ultricies mauris quis euismod. Praesent sem libero, venenatis ut ornare eget, volutpat tincidunt lacus. Pellentesque aliquam turpis et mauris consectetur, quis condimentum nunc dignissim. Cras lectus libero, pellentesque non malesuada at, condimentum nec ex. Nam sed accumsan enim. Donec eros massa, malesuada quis nulla elementum, imperdiet condimentum orci. Integer non velit et nulla vestibulum vestibulum. Proin vehicula tristique libero, eu tincidunt erat cursus ac. Ut malesuada ante ut est dictum, ornare varius arcu aliquet. Quisque vitae libero eget orci tristique aliquam id sit amet nunc.
      </p><br/>

      <p>
        Vivamus tincidunt risus ut sapien tincidunt, ac fermentum libero dapibus. Duis accumsan enim ac magna tempor, vestibulum euismod nisl pharetra. Ut dictum lacus eu venenatis vestibulum. Vestibulum euismod at arcu ac blandit. Curabitur eu imperdiet magna. Duis bibendum efficitur diam, eget placerat nunc imperdiet eget. Morbi porta at leo sed porta. Nullam eleifend eleifend quam eget dictum.
      </p><br/>

      <p>
        Sed nulla erat, lacinia sit amet dui at, cursus blandit neque. In ultricies, dui a laoreet dignissim, risus mi cursus risus, at luctus sem arcu non tortor. In hac habitasse platea dictumst. Etiam ut vulputate augue. Aenean efficitur commodo ipsum, in aliquet arcu blandit non. Praesent sed tempus dui, non eleifend nisi. Proin non finibus diam, quis finibus ante. Fusce aliquam faucibus mauris, id consequat velit ultricies at. Aliquam neque erat, fermentum non aliquam id, mattis nec justo. Nullam eget suscipit lectus.
      </p><br/>

      <p>
        Mauris velit turpis, scelerisque at velit sed, porta varius tellus. Donec mollis faucibus arcu id luctus. Etiam sit amet sem orci. Integer accumsan enim id sem aliquam sollicitudin. Etiam sit amet lorem risus. Aliquam pellentesque vestibulum hendrerit. Pellentesque dui mauris, volutpat vel sapien vitae, iaculis venenatis odio. Donec vel metus et purus ullamcorper consequat. Mauris at ullamcorper quam, sed vehicula felis. Vestibulum fringilla, lacus sit amet finibus imperdiet, tellus massa pretium urna, non lacinia dui nibh ut enim. Nullam vestibulum bibendum purus convallis vehicula. Morbi tempor a ipsum mattis pellentesque. Nulla non libero vel enim accumsan luctus.
      </p><br/>

      <p>
        Nam accumsan eleifend metus at imperdiet. Mauris pellentesque ipsum nisi, et fringilla leo blandit sed. In tempor, leo sit amet fringilla imperdiet, ipsum enim sagittis sem, non molestie nisi purus consequat sapien. Proin at velit id elit tincidunt iaculis ac ac libero. Vivamus vitae tincidunt ex. Duis sit amet lacinia massa. Quisque lobortis tincidunt metus ut commodo. Sed euismod quam gravida condimentum commodo.
      </p><br/>

      <p>
        Suspendisse vulputate eros ut aliquet molestie. Integer ultricies sit amet nisi nec suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent id eleifend leo, in rutrum magna. Phasellus felis orci, imperdiet eget felis vitae, interdum scelerisque justo. Nullam orci orci, hendrerit a lacus vel, finibus blandit est. Nunc faucibus tortor ac enim condimentum, ac fringilla magna dignissim.
      </p><br/>

      <p>
        In sagittis tortor sit amet turpis placerat sagittis. Donec vitae urna id libero tincidunt hendrerit nec eget lectus. Curabitur magna quam, viverra id elit in, finibus elementum metus. Morbi venenatis dolor iaculis massa ornare scelerisque. Etiam volutpat nisi vel erat ornare, et blandit erat ultrices. Aliquam arcu arcu, sagittis semper elit et, tincidunt condimentum orci. Aliquam vestibulum enim id mauris ullamcorper, non volutpat tortor viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras consectetur mauris et fermentum sollicitudin. Maecenas tempor vulputate eleifend. Suspendisse elementum dui ut elit congue pharetra. Cras sagittis eget lacus nec bibendum. In interdum leo nibh, a vestibulum est blandit eu. Cras scelerisque et arcu vitae vulputate.
      </p><br/>

      <p>
        Praesent ligula arcu, scelerisque non placerat ullamcorper, pharetra sed tortor. Curabitur vel sagittis leo, non imperdiet lorem. Quisque hendrerit rutrum sem, vitae dictum ipsum mattis non. Etiam in nibh egestas, ullamcorper nisl nec, interdum ex. Proin et orci luctus, venenatis odio ut, dapibus quam. Integer aliquet aliquet consequat. Donec rutrum dui orci, at facilisis lectus fermentum a. Proin eleifend ornare odio luctus rhoncus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed a erat sit amet tellus gravida ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu arcu metus. Sed efficitur nulla diam, a mattis magna fringilla a. In vitae ante risus. Maecenas vel elit blandit, pharetra eros in, egestas eros. Nullam efficitur auctor quam, vitae pretium ante dapibus ut.
      </p>
    </Rightside>

    <Leftside title='Contents' icon={faBars} >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius semper ligula, eu luctus nunc mollis in. Vestibulum vulputate metus metus, id rutrum magna imperdiet nec. Aenean at pharetra risus. Integer convallis ac enim id aliquet. Mauris pharetra mollis nulla, eget posuere mi accumsan eu. Curabitur urna nisl, varius rhoncus tristique et, egestas et augue. Vivamus ac libero faucibus, vehicula quam in, posuere felis. Aliquam erat volutpat. Maecenas pretium iaculis dui sed elementum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.
      </p><br/>

      <p>
        Aliquam erat volutpat. Integer suscipit nisl ut mauris maximus, sed blandit nulla consequat. In a ipsum feugiat, lobortis enim in, pharetra sem. In varius nunc non nibh elementum porta pharetra vel neque. Integer lobortis odio vulputate arcu mollis, sit amet tincidunt dolor dignissim. Ut nec massa mollis, tristique leo vitae, bibendum dui. Donec volutpat mauris neque, lacinia lobortis est sodales quis. Cras sem lacus, molestie ac ullamcorper ut, suscipit eu lorem. Maecenas vehicula quam et urna elementum imperdiet. Suspendisse eu nibh eget mi porttitor tincidunt vitae eget tortor. Aliquam facilisis tincidunt tempus. Vestibulum porttitor pretium eros eget fermentum. Praesent eget iaculis elit. Suspendisse vitae ultricies orci, sit amet semper mauris. Ut eu laoreet purus.
      </p><br/>

      <p>
        Aenean ut felis finibus, aliquet mi a, feugiat felis. Donec porta, odio et vulputate laoreet, nibh odio iaculis mi, et ornare nulla orci vitae ligula. Sed mi velit, aliquam sit amet efficitur eget, scelerisque vel ligula. Aliquam finibus erat nec accumsan posuere. Vestibulum rhoncus, velit vitae volutpat vehicula, leo orci faucibus eros, at ornare nibh nunc nec mi. Donec porttitor ultricies mauris quis euismod. Praesent sem libero, venenatis ut ornare eget, volutpat tincidunt lacus. Pellentesque aliquam turpis et mauris consectetur, quis condimentum nunc dignissim. Cras lectus libero, pellentesque non malesuada at, condimentum nec ex. Nam sed accumsan enim. Donec eros massa, malesuada quis nulla elementum, imperdiet condimentum orci. Integer non velit et nulla vestibulum vestibulum. Proin vehicula tristique libero, eu tincidunt erat cursus ac. Ut malesuada ante ut est dictum, ornare varius arcu aliquet. Quisque vitae libero eget orci tristique aliquam id sit amet nunc.
      </p><br/>

      <p>
        Vivamus tincidunt risus ut sapien tincidunt, ac fermentum libero dapibus. Duis accumsan enim ac magna tempor, vestibulum euismod nisl pharetra. Ut dictum lacus eu venenatis vestibulum. Vestibulum euismod at arcu ac blandit. Curabitur eu imperdiet magna. Duis bibendum efficitur diam, eget placerat nunc imperdiet eget. Morbi porta at leo sed porta. Nullam eleifend eleifend quam eget dictum.
      </p><br/>

      <p>
        Sed nulla erat, lacinia sit amet dui at, cursus blandit neque. In ultricies, dui a laoreet dignissim, risus mi cursus risus, at luctus sem arcu non tortor. In hac habitasse platea dictumst. Etiam ut vulputate augue. Aenean efficitur commodo ipsum, in aliquet arcu blandit non. Praesent sed tempus dui, non eleifend nisi. Proin non finibus diam, quis finibus ante. Fusce aliquam faucibus mauris, id consequat velit ultricies at. Aliquam neque erat, fermentum non aliquam id, mattis nec justo. Nullam eget suscipit lectus.
      </p><br/>

      <p>
        Mauris velit turpis, scelerisque at velit sed, porta varius tellus. Donec mollis faucibus arcu id luctus. Etiam sit amet sem orci. Integer accumsan enim id sem aliquam sollicitudin. Etiam sit amet lorem risus. Aliquam pellentesque vestibulum hendrerit. Pellentesque dui mauris, volutpat vel sapien vitae, iaculis venenatis odio. Donec vel metus et purus ullamcorper consequat. Mauris at ullamcorper quam, sed vehicula felis. Vestibulum fringilla, lacus sit amet finibus imperdiet, tellus massa pretium urna, non lacinia dui nibh ut enim. Nullam vestibulum bibendum purus convallis vehicula. Morbi tempor a ipsum mattis pellentesque. Nulla non libero vel enim accumsan luctus.
      </p><br/>

      <p>
        Nam accumsan eleifend metus at imperdiet. Mauris pellentesque ipsum nisi, et fringilla leo blandit sed. In tempor, leo sit amet fringilla imperdiet, ipsum enim sagittis sem, non molestie nisi purus consequat sapien. Proin at velit id elit tincidunt iaculis ac ac libero. Vivamus vitae tincidunt ex. Duis sit amet lacinia massa. Quisque lobortis tincidunt metus ut commodo. Sed euismod quam gravida condimentum commodo.
      </p><br/>

      <p>
        Suspendisse vulputate eros ut aliquet molestie. Integer ultricies sit amet nisi nec suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent id eleifend leo, in rutrum magna. Phasellus felis orci, imperdiet eget felis vitae, interdum scelerisque justo. Nullam orci orci, hendrerit a lacus vel, finibus blandit est. Nunc faucibus tortor ac enim condimentum, ac fringilla magna dignissim.
      </p><br/>

      <p>
        In sagittis tortor sit amet turpis placerat sagittis. Donec vitae urna id libero tincidunt hendrerit nec eget lectus. Curabitur magna quam, viverra id elit in, finibus elementum metus. Morbi venenatis dolor iaculis massa ornare scelerisque. Etiam volutpat nisi vel erat ornare, et blandit erat ultrices. Aliquam arcu arcu, sagittis semper elit et, tincidunt condimentum orci. Aliquam vestibulum enim id mauris ullamcorper, non volutpat tortor viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras consectetur mauris et fermentum sollicitudin. Maecenas tempor vulputate eleifend. Suspendisse elementum dui ut elit congue pharetra. Cras sagittis eget lacus nec bibendum. In interdum leo nibh, a vestibulum est blandit eu. Cras scelerisque et arcu vitae vulputate.
      </p><br/>

      <p>
        Praesent ligula arcu, scelerisque non placerat ullamcorper, pharetra sed tortor. Curabitur vel sagittis leo, non imperdiet lorem. Quisque hendrerit rutrum sem, vitae dictum ipsum mattis non. Etiam in nibh egestas, ullamcorper nisl nec, interdum ex. Proin et orci luctus, venenatis odio ut, dapibus quam. Integer aliquet aliquet consequat. Donec rutrum dui orci, at facilisis lectus fermentum a. Proin eleifend ornare odio luctus rhoncus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed a erat sit amet tellus gravida ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu arcu metus. Sed efficitur nulla diam, a mattis magna fringilla a. In vitae ante risus. Maecenas vel elit blandit, pharetra eros in, egestas eros. Nullam efficitur auctor quam, vitae pretium ante dapibus ut.
      </p>
    </Leftside>

    <Main title='gatsby-theme-dualside' >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius semper ligula, eu luctus nunc mollis in. Vestibulum vulputate metus metus, id rutrum magna imperdiet nec. Aenean at pharetra risus. Integer convallis ac enim id aliquet. Mauris pharetra mollis nulla, eget posuere mi accumsan eu. Curabitur urna nisl, varius rhoncus tristique et, egestas et augue. Vivamus ac libero faucibus, vehicula quam in, posuere felis. Aliquam erat volutpat. Maecenas pretium iaculis dui sed elementum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.
      </p><br/>

      <p>
        Aliquam erat volutpat. Integer suscipit nisl ut mauris maximus, sed blandit nulla consequat. In a ipsum feugiat, lobortis enim in, pharetra sem. In varius nunc non nibh elementum porta pharetra vel neque. Integer lobortis odio vulputate arcu mollis, sit amet tincidunt dolor dignissim. Ut nec massa mollis, tristique leo vitae, bibendum dui. Donec volutpat mauris neque, lacinia lobortis est sodales quis. Cras sem lacus, molestie ac ullamcorper ut, suscipit eu lorem. Maecenas vehicula quam et urna elementum imperdiet. Suspendisse eu nibh eget mi porttitor tincidunt vitae eget tortor. Aliquam facilisis tincidunt tempus. Vestibulum porttitor pretium eros eget fermentum. Praesent eget iaculis elit. Suspendisse vitae ultricies orci, sit amet semper mauris. Ut eu laoreet purus.
      </p><br/>

      <p>
        Aenean ut felis finibus, aliquet mi a, feugiat felis. Donec porta, odio et vulputate laoreet, nibh odio iaculis mi, et ornare nulla orci vitae ligula. Sed mi velit, aliquam sit amet efficitur eget, scelerisque vel ligula. Aliquam finibus erat nec accumsan posuere. Vestibulum rhoncus, velit vitae volutpat vehicula, leo orci faucibus eros, at ornare nibh nunc nec mi. Donec porttitor ultricies mauris quis euismod. Praesent sem libero, venenatis ut ornare eget, volutpat tincidunt lacus. Pellentesque aliquam turpis et mauris consectetur, quis condimentum nunc dignissim. Cras lectus libero, pellentesque non malesuada at, condimentum nec ex. Nam sed accumsan enim. Donec eros massa, malesuada quis nulla elementum, imperdiet condimentum orci. Integer non velit et nulla vestibulum vestibulum. Proin vehicula tristique libero, eu tincidunt erat cursus ac. Ut malesuada ante ut est dictum, ornare varius arcu aliquet. Quisque vitae libero eget orci tristique aliquam id sit amet nunc.
      </p><br/>

      <p>
        Vivamus tincidunt risus ut sapien tincidunt, ac fermentum libero dapibus. Duis accumsan enim ac magna tempor, vestibulum euismod nisl pharetra. Ut dictum lacus eu venenatis vestibulum. Vestibulum euismod at arcu ac blandit. Curabitur eu imperdiet magna. Duis bibendum efficitur diam, eget placerat nunc imperdiet eget. Morbi porta at leo sed porta. Nullam eleifend eleifend quam eget dictum.
      </p><br/>

      <p>
        Sed nulla erat, lacinia sit amet dui at, cursus blandit neque. In ultricies, dui a laoreet dignissim, risus mi cursus risus, at luctus sem arcu non tortor. In hac habitasse platea dictumst. Etiam ut vulputate augue. Aenean efficitur commodo ipsum, in aliquet arcu blandit non. Praesent sed tempus dui, non eleifend nisi. Proin non finibus diam, quis finibus ante. Fusce aliquam faucibus mauris, id consequat velit ultricies at. Aliquam neque erat, fermentum non aliquam id, mattis nec justo. Nullam eget suscipit lectus.
      </p><br/>

      <p>
        Mauris velit turpis, scelerisque at velit sed, porta varius tellus. Donec mollis faucibus arcu id luctus. Etiam sit amet sem orci. Integer accumsan enim id sem aliquam sollicitudin. Etiam sit amet lorem risus. Aliquam pellentesque vestibulum hendrerit. Pellentesque dui mauris, volutpat vel sapien vitae, iaculis venenatis odio. Donec vel metus et purus ullamcorper consequat. Mauris at ullamcorper quam, sed vehicula felis. Vestibulum fringilla, lacus sit amet finibus imperdiet, tellus massa pretium urna, non lacinia dui nibh ut enim. Nullam vestibulum bibendum purus convallis vehicula. Morbi tempor a ipsum mattis pellentesque. Nulla non libero vel enim accumsan luctus.
      </p><br/>

      <p>
        Nam accumsan eleifend metus at imperdiet. Mauris pellentesque ipsum nisi, et fringilla leo blandit sed. In tempor, leo sit amet fringilla imperdiet, ipsum enim sagittis sem, non molestie nisi purus consequat sapien. Proin at velit id elit tincidunt iaculis ac ac libero. Vivamus vitae tincidunt ex. Duis sit amet lacinia massa. Quisque lobortis tincidunt metus ut commodo. Sed euismod quam gravida condimentum commodo.
      </p><br/>

      <p>
        Suspendisse vulputate eros ut aliquet molestie. Integer ultricies sit amet nisi nec suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent id eleifend leo, in rutrum magna. Phasellus felis orci, imperdiet eget felis vitae, interdum scelerisque justo. Nullam orci orci, hendrerit a lacus vel, finibus blandit est. Nunc faucibus tortor ac enim condimentum, ac fringilla magna dignissim.
      </p><br/>

      <p>
        In sagittis tortor sit amet turpis placerat sagittis. Donec vitae urna id libero tincidunt hendrerit nec eget lectus. Curabitur magna quam, viverra id elit in, finibus elementum metus. Morbi venenatis dolor iaculis massa ornare scelerisque. Etiam volutpat nisi vel erat ornare, et blandit erat ultrices. Aliquam arcu arcu, sagittis semper elit et, tincidunt condimentum orci. Aliquam vestibulum enim id mauris ullamcorper, non volutpat tortor viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras consectetur mauris et fermentum sollicitudin. Maecenas tempor vulputate eleifend. Suspendisse elementum dui ut elit congue pharetra. Cras sagittis eget lacus nec bibendum. In interdum leo nibh, a vestibulum est blandit eu. Cras scelerisque et arcu vitae vulputate.
      </p><br/>

      <p>
        Praesent ligula arcu, scelerisque non placerat ullamcorper, pharetra sed tortor. Curabitur vel sagittis leo, non imperdiet lorem. Quisque hendrerit rutrum sem, vitae dictum ipsum mattis non. Etiam in nibh egestas, ullamcorper nisl nec, interdum ex. Proin et orci luctus, venenatis odio ut, dapibus quam. Integer aliquet aliquet consequat. Donec rutrum dui orci, at facilisis lectus fermentum a. Proin eleifend ornare odio luctus rhoncus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed a erat sit amet tellus gravida ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu arcu metus. Sed efficitur nulla diam, a mattis magna fringilla a. In vitae ante risus. Maecenas vel elit blandit, pharetra eros in, egestas eros. Nullam efficitur auctor quam, vitae pretium ante dapibus ut.
      </p>
    </Main>
  </Layout>
)
