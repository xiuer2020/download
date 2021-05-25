# Show模型详情
`->调用`
field(字段名, 展示名)

# form表单
`->调用`
text('字段名', __('展示名'));
textarea('字段名', __('展示名'));
datetime('字段名', __('展示名'))->default(date('Y-m-d H:i:s'));
text('字段名', __('展示名'));
number('字段名', __('展示名'));
datetime('字段名', __('展示名'));

# Illuminate\Routing\Controller 之 AdminController
protected $title = 'Title'
当前资源的标题。
protected $description = ['index'=>'Index', 'show'=>'Show','emit'=>'Emit','create'=>'Create']
*设置以下4个操作页的说明。
index(Content $content)
*索引接口。
show($id, Content $content)
*显示界面。
emit($id, Content $content)
*编辑界面。
create(Content $content)
*创建接口。

# Illuminate\Database\Eloquent 之 Builder class
where($column, $operator = null, $value = null, $boolean = 'and')
*在查询的主键上添加where子句。
whereColumn($first, $operator = null, $second = null, $boolean = 'and')
*添加一个“where”子句，将两列比较到查询。
whereRaw($sql, $bindings = [], $boolean = 'and')
*向查询添加一个raw where子句。
whereIn($colum, $values, $boolean = 'and', $not = false)
*向查询添加“where in”子句。
whereNotIn($column, $value, $boolean = 'and')
*向查询添加“where not in”子句。
whereNull($column, $boolean = 'and', $not = false)
*向查询添加“where null”子句。
whereNotNull($column, $boolean = 'and')
*向查询添加“where notnull”子句。
whereBetween($column, array $values, $boolean = 'and', $not = false)
*向查询中添加where-between语句。
orderBy($column, $direction = 'asc')
*向查询添加“orderby”子句。
orderByDesc($colum)
*向查询添加降序“orderby”子句。
orderByRaw($sql, $bindings = [])
*向查询添加原始的“orderby”子句。
take($value)
*设置查询的“限制”值。

# Encore\Admin\Grid\Column;

# Encore\Admin\Actions\RowAction && Encore\Admin\Actions\BatchAction
public $name = '批量复制';
动作名称
public function handle(Collection $collection)
点击动作后执行
public function dialog()
互动操作定义
public function form()
定义表单结构
text($column, $label = '')
文字类型
email($column, $label = '')
邮件类型
integer($column, $label = '')
整型类型
ip($column, $label = '')
协议类型
url($column, $label = '')
URL地址类型
password($column, $label = '')
密码类型
mobile($column, $label = '')
移动电话类型
textarea($column, $label = '')
文本域类型
select($column, $label = '')
下拉框类型
multipleSelect($column, $label = '')
多选下拉框类型
checkbox($column, $label = '')
复选框类型
radio($column, $label = '')
单选框类型
file($column, $label = '')
文件类型
image($column, $label = '')
图片类型
multipleFile($column, $label = '')
多选文件类型
multipleImage($column, $label = '')
多选图片类型
date($column, $label = '')
日期类型
datetime($column, $label = '')
日期时间类型
time($column, $label = '')
时间类型
hidden($column, $label = '')
隐藏类型





# grid_actions_argument
disableDelete()
去掉删除
disableEdit()
去掉编辑
disableView
去掉查看
row
当前行的数据数组
getKey()
获取当前行主键值
add(action_instance)
行动作加入到表格

# grid_batchActions
disableDelete()
禁用批量删除
add(batch_action_instance)
行批量动作加入到表格

# grid_filter_argument
column('proportion1/2', function ($filter))
多列布局
group('field_name', function ($group)))
过滤器组
disableIdFilter()
去掉默认的id过滤器
scoped()
定义查询范围
equal('field_name', 'label')
相等
notEqual('field_name', 'label')
不相等
like('field_name', 'label')
包含
ilike('field_name', 'label')
包含(不区分大小写)
contains('field_name', 'label')
包含
startsWith('field_name', 'label')
查询以输入内容开头的title字段数据
startsWith('field_name', 'label')
查询以输入内容结尾的title字段数据
gt('field_name', 'label')
大于
lt('field_name', 'label')
小于
between('field_name', 'label')
in('field_name', 'label')
notIn('field_name', 'label')
date('field_name', 'label')
day('field_name', 'label')
month('field_name', 'label')
year('field_name', 'label')
where('field_name', 'label')

# grid_filter_argument_form_limit
placeholder('placeholder')
url();
限制输入格式为url
email();
限制输入格式为email
integer();
限制输入格式为integer
ip();
限制输入格式为ip
mac();
限制输入格式为mac
mobile();
限制输入格式为mobile
decimal($options = []);
限制输入格式为十进制的
currency($options = []);
限制输入格式为货币
percentage($options = []);
限制输入格式为百分比
inputmask($options = [], $icon = 'pencil');
输入掩码
select(array $array)
下拉选择
multipleSelect(array $array)
多选
radio(array $array)
单选
checkbox(array $array)
复选
datetime($options)
通过日期时间组件来查询 $opton可选值：https://getdatepicker.com/4/Options/#options
date();
相当于 `datetime(['format' => 'HH:mm:ss'])`
time();
相当于 `datetime(['format' => 'DD'])`
day();
` 相当于 `datetime(['format' => 'MM'])`
month();
相当于 `datetime(['format' => 'YYYY'])`
year()

# column_return
editable()
可编辑的 参数1可选[textarea,select,date,datetime,year,month,day] 参数1为select是, 参数2是选项array
switch(array $states)
快速将列变成开关组件
radio(array $options)
设为单选组件
checkbox(array $options)
设为复选组件
data()
格式化输出
initAttributes()
*初始化列属性。
define($name, $definition)
*全局定义列。
setOriginalGridModels(Collection $collection)
*设置列的原始数据。
setAttributes($attributes = [], key = null)
*设置列属性。
getAttributes($name, $key = null)
*获取列属性。
formatHtmlAttributes()
*将属性格式化为html。
style()
*设置此列的样式。
width(int $width)
*设置列的宽度。
color($color)
*设置列的颜色。
getOriginal()
*获取原始列值。
getName()
*获取此列的名称。
getLabel()
*获取列的标签。
sortable($cat = null)
*将此列标记为可排序。
help($help = '')
*设置列的帮助消息。
filter($builder = null)
*设置列筛选器。 可选值 [like,date,time,datetime,array,range] 可组合
display(Closure $callback)
*添加显示回调。
displayUsing($abstract, $argument = [])
*使用显示摘要显示。
hide()
默认情况下隐藏此列
gravatar($size = 30)
以电子邮件格式将字段显示为gavatar。
loading($values = [], $others = [])
显示为一个loading加载icon
filesize()
将文件大小转换为可读格式，如“100mb”。
downloadable($server = '')
可下载链接
icon(array $setting, $default = '')
显示icon
image($server = '', $width = 200, $height = 200)
图片显示
label($style = 'success')
显示label标签
link($href = '', $target = '_blank')
将字段显示为一个链接。
progress($style = 'primary', $size = 'sm', $max = 100)
将字段显示为一个进度条
table($titles = [])
将字段显示为一个表格
carousel(int $width = 300, int $height = 200, $server = '')
调用显示为图片轮播组件
copyable()
可复制
dot($options = [], $default = '')
加上一个带颜色的圆点
qrcode($formatter = null, $width = 150, $height = 150)
二维码显示
using(array $values, $default = null)
*使用数组值映射显示列。
replace(array $replacements)
*用给定的映射替换输出值。
bool(array $map = [], $default = false)
*将列显示为布尔值`✓` 是真的，而且`✗` 为假。
default($default = '-')
*如果为空，则将列显示为默认值。

# Encore\Admin\Grid 之 grid_instance
disableBatchActions()
禁用批量操作
actions($actions)
定义模型表格动作
batchActions()
定义模型表格批量动作
option($key, $value = null)
获取或设置网格选项。
getKeyName()
获取模型的主键名称。
columns($columns = [])
批量将列添加到网格。
addColumn($column = '', $label = '')
将列添加到网格。
getColumns()
获取所有列对象。
addRelationColumn($name, $label = '')
将关系列添加到网格。
addJsonColumn($name, $label = '')
将json类型的列添加到网格。
prependColumn($column = '', $label = '')
将列前置到网格。
model() => model_install
paginate($perPage = 20)
对网格分页。
paginator()
找到网格分页器。
disablePagination(bool $disable = true)
禁用网格分页。
showPagination()
如果此网格使用分页。
perPages(array $perPages)
设置每页选项。
disablePerPageSelector(bool $disable = true)
设置每页选项。
disableRowSelector(bool $disable = true)
禁用行选择器。
prependRowSelectorColumn()
为网格预先添加复选框列。
*构建网格。
rows(Closure $callable = null)
*设置网格行回调函数。
getCreateUrl()
*获取并创建url。
disableCreateButton(bool $disable = true)
禁用创建按钮
disableCreatin()
禁用创建按钮
disableCreationButton
*删除网格上的“创建”按钮。
disableEmptyPage(bool $disable = true)
*删除网格上的定义空页。
showDefineEmptyPage()
*如果网格显示，请在网格上定义空页。
showCreateBtn()
*如果允许创建。
rendenCreateButton
*网格的“渲染创建”按钮。
resoure($path = null)
*获取当前资源url。
handleGetMutatorColum($method, $label)
*向网格视图动态添加列。
handleRelationColum($method, $label)
*向网格视图添加变量。
setView($view, $variables = [])
*设置要渲染的视图。
setTitle($title)
*设置网格标题。
setRelation(Relation\Relation $relation)
*设置网格关系。
setResoure($path)
*为网格设置资源路径。
rendering(callback $callback)
*设置渲染回调。
render()
*获取网格视图的字符串内容。
column($name, $label = '')
将柱添加到轴网
sortable($cast = null)
将此列标记为可排序。
display(Closure $callback)
添加显示回调。
filter($builder = null)
设置列筛选器。
field_name($label);
将柱添加到轴网
disableFilter(bool $filter = true)
*禁用网格筛选器。
getFilter()
*获取网格过滤器。
applyFilter($toArray = true)
*处理网格过滤器。
filter(Closure $callback)
*设置网格过滤器。
renderFilter()
*渲染栅格过滤器。
expandFilter()
*展开过滤器。
exporter($exporter)
*将网格的导出器驱动程序设置为导出。
getExportUrl($scope = 1, $args = null)
*获取导出url。
showExportBtn()
*如果网格显示导出btn。
disableExport()
*禁用导出。
renderExportButton()
*“渲染导出”按钮。
disableActions(bool $disable = true)
*禁用所有操作。
fixColumns(）
固定列

# model_instance
collection(\Closure $callback = null)
*设置集合回调。

























