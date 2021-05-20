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

# column_return
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
*设置列筛选器。
display(Closure $callback)
*添加显示回调。
displayUsing($abstract, $argument = [])
*使用显示摘要显示。

# Encore\Admin\Grid 之 grid_instance(可采用链式写法)
__construct(Eloquent $model, Closure $builder = null)
创建新的网格实例。
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
model() => buider class
获取网格模型。
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


























