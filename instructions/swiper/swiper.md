https://www.swiper.com.cn/api/index.html

# 使用
[]<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.css">  
<!-- CDN引入CSS -->
[]<script src="https://unpkg.com/swiper/swiper-bundle.js"> </script> 
<!-- CDN引入js -->

# vue中使用
[]import { Swiper, SwiperSlide } from 'swiper/vue';
[]vm.components{Swiper}

# DOM
[]类[swiper-container]用于轮播图初始化化[容器], 可[自定义]
[]类[swiper-pagination]用于[分页器], 可[自定义]
[3]类[swiper-button-prev], [swiper-button-prev]用于[导航按钮], 可[自定义]
[4]类[swiper-scrollbar]用于[滚动条], 可[滚动条]
[5]类[swiper-wrapper]用于轮播图[slide]各项[容器]
[6]类[swiper-slide]用于[轮播项]

# css
.swiper-container:{mla+mra};
.swiper-wrapper: {posr+w100p+h100p+df}
.swiper-pagination: {posa}
.swiper-button-next, .swiper-button-prev{posa+t50p+df+w+h+aic+jcc}

# API
[]new Swiper(swiperContainer[, Options])
<!-- 初始化 -->

# initialSlide属性
`Basic（Swiper一般选项）`
initialSlide:Number
direction: 'horizontal' | 'vertical'
speed: Number
grabCursor: Boolean

parallax: Boolean 
效果可以应用于container或slide的子元素
定义<Dom data-swiper-parallax data-swiper-parallax-opacity data-swiper-parallax-scale></Dom>  

setWrapperSize: Boolean
virtualTranslate: Boolean
a11y
width: Number
height: Number
roundLengths: Boolean
breakpoints: Objectt
breakpoints:{Number:{slidesPerView, slidesPerGroup,  spaceBetween, slidesPerColumn, slidesPerGroupSkip}}

autoHeight: Boolean
uniqueNavElements: Boolean
nested
runCallbacksOnInit
watchOverflow
init
on
preloadImages
updateOnImagesReady
cssMode
updateOnWindowResize

Slides grid (网格分布)
centeredSlides
centeredSlidesBounds
slidesPerView
slidesPerGroup
slidesPerGroupSkip
spaceBetween
slidesPerColumn
slidesPerColumnFill
slidesOffsetBefore
slidesOffsetAfter
normalizeSlideIndex
centerInsufficientSlides

Free Mode （free模式/抵抗反弹）
freeMode
freeModeMomentum
freeModeMomentumRatio
freeModeMomentumVelocityRatio
freeModeMomentumBounce
freeModeMomentumBounceRatio
freeModeSticky
freeModeMinimumVelocity

Loop (环路)
loop
loopAdditionalSlides
loopedSlides
loopFillGroupWithBlank
loopPreventsSlide

Progress（进度）
watchSlidesProgress
watchSlidesVisibility


Clicks (点击)
preventClicks
preventClicksPropagation
slideToClickedSlide

Touches(触发条件)
touchRatio
simulateTouch
allowTouchMove
followFinger
shortSwipes
longSwipes
longSwipesMs
longSwipesRatio
threshold
touchAngle
touchStartPreventDefault
touchStartForcePreventDefault
touchMoveStopPropagation
resistance
resistanceRatio
edgeSwipeDetection
edgeSwipeThreshold
passiveListeners
touchReleaseOnEdges
touchEventsTarget

Swiping / No swiping(禁止切换)
preventInteractionOnTransition

noSwiping

noSwipingSelector

noSwipingClass

allowSlideNext

allowSlidePrev

swipeHandler


Observer （监视器）
observer

observeParents

observeSlideChildren


Namespace （命名空间）
wrapper
ClassslideClass
slideActiveClasss
lideVisibleClasss
lideDuplicateClass
slideNextClass
slidePrevClass
slideDuplicatedActiveClass
slideDuplicatedNextClass
slideDuplicatedPrevClass
containerModifierClass


Events （事件）
init(swiper)
touchStart(swiper,event)
touchMove(swiper,event)
touchEnd(swiper,event)
slideChangeTransitionStart(swiper)
slideChangeTransitionEnd(swiper)
imagesReady(swiper)
transitionStart(swiper)
transitionEnd(swiper)
touchMoveOpposite(swiper,event)
sliderMove(swiper,event)
click(swiper,event)
tap(swiper,event)
doubleTap(swiper,event)
progress(swiper,progress)
reachBeginning(swiper)
beforeDestroy(swiper)
reachEnd(swiper)
setTransition(swiper,transition)
resize(swiper)
setTranslate(swiper,translate)
slideNextTransitionStart(swiper)
slideNextTransitionEnd(swiper)
slidePrevTransitionStart(swiper)
slidePrevTransitionEnd(swiper)
fromEdge(swiper)
toEdge(swiper)
slideChange(swiper)
autoplayStartautoplayStopautoplaybeforeLoopFix(swiper)
loopFix(swiper)
observerUpdate(swiper)
breakpoint(swiper)

Properties （Swiper属性）
mySwiper.active
IndexmySwiper.realIndex
mySwiper.previousIndex
mySwiper.width
mySwiper.height
mySwiper.touches
mySwiper.params
mySwiper.$el
mySwiper.$wrapperEl
mySwiper.slides
mySwiper.translate
mySwiper.progress
mySwiper.isBeginning
mySwiper.isEnd
mySwiper.animating
mySwiper.clickedIndex
mySwiper.clickedSlide
mySwiper.allowSlideNext
mySwiper.allowSlidePrev
mySwiper.allowTouchMove


Methods （Swiper方法）
mySwiper.slideNext(speed, runCallbacks)
mySwiper.slidePrev(speed,runCallbacks)
mySwiper.slideTo(index, speed, runCallbacks)
mySwiper.slideToLoop(index, speed, runCallbacks)
mySwiper.destroy(deleteInstance, cleanupStyles)
mySwiper.getTranslate()
mySwiper.setTranslate(translate)
mySwiper.updateSize()
mySwiper.updateSlides()
mySwiper.updateProgress()
mySwiper.updateSlidesClasses()
mySwiper.update(updateTranslate)
mySwiper.detachEvents()
mySwiper.attachEvents()
mySwiper.appendSlide(slides)
mySwiper.prependSlide(slides)
mySwiper.addSlide(index, slides);
mySwiper.removeSlide(index)
mySwiper.removeAllSlides()
mySwiper.on(event,handler)
mySwiper.once(event,handler)
mySwiper.off(event)
mySwiper.off(event, handler)
mySwiper.setGrabCursor()
mySwiper.unsetGrabCursor()
mySwiper.updateAutoHeight(speed)
mySwiper.slideToClosest(speed, runCallbacks)
mySwiper.changeDirection(direction)
mySwiper.translateTo(translate, speed, ...)组件


Autoplay (自动切换)
autoplay

delay

stopOnLastSlide

disableOnInteraction

reverseDirection

waitForTransition

mySwiper.autoplay.running

mySwiper.autoplay.start()

mySwiper.autoplay.stop()


Effects (切换效果)
effect

slidefadeEffect

cubeEffect

coverflowEffect

flipEffect


Pagination（分页器）
pagination

el

type

progressbarOpposite

bulletElement

dynamicBullets

dynamicMainBullets

hideOnClick

clickable

renderBullet(index, className)

renderFraction()

renderProgressbar()

renderCustom()

formatFractionCurrent

formatFractionTotal

bulletClass

bulletActiveClass

modifierClass

Class

totalClass

hiddenClass

progressbarFillClass

-fillclickableClass

mySwiper.pagination.el

mySwiper.pagination.

mySwiper.pagination.render()

mySwiper.pagination.update()

paginationHide

paginationShow

paginationRender(swiper, pagina

paginationUpdate(swiper, pagina


Navigation Buttons（前进后退按钮）
navigation

nextEl

prevEl

hideOnClick

disabledClass

hiddenClass

mySwiper.navigation.nextEl

mySwiper.navigation.prevEl

mySwiper.navigation.update()

navigationHide

navigationShow


Scollbar（滚动条）
scrollbar

el

hide

draggable

snapOnRelease

dragSize

mySwiper.scrollbar.el

mySwiper.scrollbar.dragEl

mySwiper.scrollbar.updateSize()


Keyboard（键盘）
keyboard

enabled

onlyInViewport

mySwiper.keyboard.enabled

mySwiper.keyboard.enable()

mySwiper.keyboard.disable()

keyPress()

pageUpDown


Mousewheel (鼠标)
mousewheel

forceToAxis

releaseOnEdges

invert

sensitivity

eventsTarged

containermySwiper.mousewheel.enabled

mySwiper.mousewheel.enable()

mySwiper.mousewheel.disable()

thresholdDelta

thresholdTime


Lazy Loading(延迟加载)
lazy

loadPrevNext

loadPrevNextAmount

loadOnTransitionStart

elementClass

loadingClass

loadedClass

preloaderClass

mySwiper.lazy.load()

mySwiper.lazy.loadInSlide(index

lazyImageLoad(swiper, slideEl,

lazyImageReady(swiper, slideEl,


Zoom (调焦)
zoom

maxRatio

3minRatio

toggle

containerClass

zoomedSlideClass

mySwiper.zoom.enabled

mySwiper.zoom.scale

mySwiper.zoom.enable()

mySwiper.zoom.disable()

mySwiper.zoom.toggle()

mySwiper.zoom.in()

mySwiper.zoom.out()

zoomChange


Controller (双向控制)
controller

control

inverse

By

slide
Thumbs (缩略图)
thumbs

swiper

slideThumbActiveClass

thumbsContainerClass

mySwiper.thumbs.swiper

multipleActiveThumbs

autoScrollOffset


Virtual Slides (虚拟slide)
virtual

slides

[]cache

renderSlide

renderExternal

addSlidesBefore

addSlidesAfter

mySwiper.virtual.cache

mySwiper.virtual.from

mySwiper.virtual.to

mySwiper.virtual.slides

mySwiper.virtual.appendSlide(sl

mySwiper.virtual.prependSlide(s

mySwiper.virtual.update()

mySwiper.virtual.removeSlide(sl

mySwiper.virtual.removeAllSlide


Hash Navigation (锚导航)
hashNavigation

watchState

replaceState

hashChange

hashSet


History Navigation (历史导航)
history

replaceState

key

slides