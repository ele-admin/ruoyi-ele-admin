import{_ as Pt}from"./index-AmtRfZLy.js";import{aU as et,W as ue,o as oe,b as de,w as A,d as E,av as vt,aw as tt,s as Q,e as fe,ay as Ye,az as rt,E as Be,aB as at,a$ as Re,aW as Ve,c as ye,$ as ze,a0 as De,bL as yt,bM as wt,_ as He,a as te,p as $e,q as Ge,D as mt,b3 as Lt,x as Oe,F as nt,aT as kt,b2 as xt,cq as We,cT as Ze,cr as $t,an as Ee,b1 as Wt,b0 as Et,n as Zt,aq as qt,ad as pe,ba as Kt,t as ke,be as Gt,af as Ct,aX as Yt,aZ as Ht,a5 as Xt,aA as Jt,f as Qt,bc as er,ah as it,ai as tr,bb as Tt,b8 as ft,b9 as ve,bd as rr,a4 as ar,bw as nr,ae as pt,bQ as ir,a8 as or}from"./index-B6yCc2m_.js";import{_ as Nt}from"./index-BJMucfID.js";import{_ as sr,a as St}from"./index-C6QIYa0w.js";import{E as ot,a as st,_ as Ot}from"./index-6AfRRrL-.js";import{E as lr}from"./date-picker-CO9Lkaff.js";import{_ as dr}from"./menu-select-CCyDj4F4.js";import{l as ur}from"./index-CEaXIub9.js";import{l as Ie,H as Me,x as ht,r as cr}from"./code-util-Bb8gujsw.js";import{E as mr}from"./tree-CopuO4KQ.js";import"./index-CtEHLY2Q.js";import"./tree-select-BVEOGY61.js";import"./index-C-mkH4ob.js";import"./index-BQVafdAu.js";import"./index-3i5fdD-M.js";const fr={__name:"gen-search",emits:["search"],setup(U,{emit:L}){const b=L,[N,w]=et({tableName:"",tableComment:""}),l=ue(["",""]),a=()=>{const[s,h]=l.value||[];b("search",{...N,params:{beginTime:s?`${s} 00:00:00`:"",endTime:h?`${h} 23:59:59`:""}})},r=()=>{w(),l.value=["",""],a()};return(s,h)=>{const p=Ye,g=rt,o=ot,i=lr,c=Be,n=st,m=at,d=Nt;return oe(),de(d,{"body-style":{paddingBottom:"2px"}},{default:A(()=>[E(m,{"label-width":"72px",onKeyup:vt(a,["enter"]),onSubmit:h[3]||(h[3]=tt(()=>{},["prevent"]))},{default:A(()=>[E(n,{gutter:8},{default:A(()=>[E(o,{lg:6,md:12,sm:12,xs:24},{default:A(()=>[E(g,{label:"表名称"},{default:A(()=>[E(p,{clearable:"",modelValue:Q(N).tableName,"onUpdate:modelValue":h[0]||(h[0]=u=>Q(N).tableName=u),modelModifiers:{trim:!0},placeholder:"请输入"},null,8,["modelValue"])]),_:1})]),_:1}),E(o,{lg:6,md:12,sm:12,xs:24},{default:A(()=>[E(g,{label:"表描述"},{default:A(()=>[E(p,{clearable:"",modelValue:Q(N).tableComment,"onUpdate:modelValue":h[1]||(h[1]=u=>Q(N).tableComment=u),modelModifiers:{trim:!0},placeholder:"请输入"},null,8,["modelValue"])]),_:1})]),_:1}),E(o,{lg:6,md:12,sm:12,xs:24},{default:A(()=>[E(g,{label:"创建时间"},{default:A(()=>[E(i,{"unlink-panels":"",type:"daterange",modelValue:l.value,"onUpdate:modelValue":h[2]||(h[2]=u=>l.value=u),"range-separator":"-","value-format":"YYYY-MM-DD","start-placeholder":"开始日期","end-placeholder":"结束日期",class:"ele-fluid"},null,8,["modelValue"])]),_:1})]),_:1}),E(o,{lg:6,md:12,sm:12,xs:24},{default:A(()=>[E(g,{"label-width":"16px"},{default:A(()=>[E(c,{type:"primary",onClick:a},{default:A(()=>h[4]||(h[4]=[fe("查询")])),_:1}),E(c,{onClick:r},{default:A(()=>h[5]||(h[5]=[fe("重置")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}},Je={__name:"column-select",props:Re({placeholder:{type:String,default:"请选择"},data:Array},{modelValue:{type:String},modelModifiers:{}}),emits:["update:modelValue"],setup(U){const L=Ve(U,"modelValue");return(b,N)=>{const w=yt,l=wt;return oe(),de(l,{clearable:"",modelValue:L.value,"onUpdate:modelValue":N[0]||(N[0]=a=>L.value=a),placeholder:U.placeholder,class:"ele-fluid","popper-options":{strategy:"fixed"}},{default:A(()=>[(oe(!0),ye(ze,null,De(U.data,a=>(oe(),de(w,{key:a.columnName,value:a.columnName,label:`${a.columnName}: ${a.columnComment}`},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])}}},pr={__name:"sticky-table",props:{tableStyle:Object,tableClass:String},setup(U){const L=ue(null),b=ue(!1),N=w=>{const l=L.value,a=w.currentTarget.scrollLeft;l.scrollLeft!=a&&(l.scrollLeft=a),b.value=a>1};return(w,l)=>{const a=sr;return oe(),ye("div",{class:Ge(["sticky-table",{"is-ping-left":b.value}])},[te("div",{ref_key:"headerRef",ref:L,style:{position:"sticky",top:"0","z-index":"999",overflow:"hidden"}},[E(a,{class:Ge(U.tableClass),style:mt(U.tableStyle)},{default:A(()=>[te("colgroup",null,[$e(w.$slots,"colgroup",{},void 0,!0)]),te("thead",null,[$e(w.$slots,"thead",{},void 0,!0)])]),_:3},8,["class","style"])],512),te("div",{style:{"overflow-x":"auto"},onScroll:N},[E(a,{class:Ge(U.tableClass),style:mt(U.tableStyle)},{default:A(()=>[te("colgroup",null,[$e(w.$slots,"colgroup",{},void 0,!0)]),te("tbody",null,[$e(w.$slots,"tbody",{},void 0,!0)])]),_:3},8,["class","style"])],32)],2)}}},hr=He(pr,[["__scopeId","data-v-8ae66ebe"]]),Ne={__name:"gen-edit-tip",props:{label:String,tip:String},setup(U){return(L,b)=>{const N=nt,w=kt;return oe(),ye(ze,null,[E(w,{placement:"top-start","popper-options":{strategy:"fixed",modifiers:[{name:"offset",options:{offset:[-12,10]}}]},content:U.tip},{default:A(()=>[E(N,{size:15,style:{"align-self":"center","margin-right":"4px",cursor:"help"}},{default:A(()=>[E(Q(Lt),{style:{opacity:"0.6"}})]),_:1})]),_:1},8,["content"]),te("span",null,Oe(U.label),1)],64)}}},It=`<template>
  <ele-page>
    <!-- 搜索表单 -->
    <<% d.modelName %>-search @search="reload" />
    <ele-card :body-style="{ paddingTop: '8px' }">
      <!-- 表格 -->
      <ele-pro-table
        ref="tableRef"
        row-key="<% d.primaryKey %>"
        :columns="columns"
        :datasource="datasource"
        :show-overflow-tooltip="true"
        v-model:selections="selections"
        :highlight-current-row="true"
        :export-config="{ fileName: '<% d.modelText %>' }"
        cache-key="<% d.tableCacheKey %>"
      >
        <template #toolbar>
          <el-button
            v-permission="'<% d.moduleName %>:<% d.modelName %>:add'"
            type="primary"
            class="ele-btn-icon"
            :icon="PlusOutlined"
            @click="openEdit()"
          >
            新建
          </el-button>
          <el-button
            v-permission="'<% d.moduleName %>:<% d.modelName %>:remove'"
            type="danger"
            class="ele-btn-icon"
            :icon="DeleteOutlined"
            @click="removeBatch()"
          >
            删除
          </el-button>
          <el-button
            v-permission="'<% d.moduleName %>:<% d.modelName %>:export'"
            class="ele-btn-icon"
            :icon="DownloadOutlined"
            @click="exportData"
          >
            导出
          </el-button>
        </template>
        <template #action="{ row }">
          <el-link
            v-permission="'<% d.moduleName %>:<% d.modelName %>:edit'"
            type="primary"
            :underline="false"
            @click="openEdit(row)"
          >
            修改
          </el-link>
          <el-divider
            v-permission="['<% d.moduleName %>:<% d.modelName %>:edit', '<% d.moduleName %>:<% d.modelName %>:remove']"
            direction="vertical"
          />
          <el-link
            v-permission="'<% d.moduleName %>:<% d.modelName %>:remove'"
            type="danger"
            :underline="false"
            @click="removeBatch(row)"
          >
            删除
          </el-link>
        </template><%# d.columns.forEach(function(item){if(item.dictType){ %>
        <template #<% item.prop %>="{ row }">
          <dict-data
            code="<% item.dictType %>"
            type="tag"
            :model-value="row.<% item.prop %>"
          />
        </template><%# }}); %>
      </ele-pro-table>
    </ele-card>
    <!-- 编辑弹窗 -->
    <<% d.modelName %>-edit v-model="showEdit" :data="current" @done="reload" />
  </ele-page>
</template>

<script setup>
  import { ref } from 'vue';
  import {
    PlusOutlined,
    DeleteOutlined,
    DownloadOutlined
  } from '@/components/icons';
  import { ElMessageBox } from 'element-plus/es';
  import { EleMessage } from 'ele-admin-plus/es';
  import <% d.modelTypeName %>Search from './components/<% d.modelName %>-search.vue';
  import <% d.modelTypeName %>Edit from './components/<% d.modelName %>-edit.vue';
  import { page<% d.modelTypeName %>s, remove<% d.modelTypeName %>s, export<% d.modelTypeName %>s } from '@/api/<% d.moduleName %>/<% d.modelName %>';

  defineOptions({ name: '<% d.moduleTypeName %><% d.modelTypeName %>' });

  /** 表格实例 */
  const tableRef = ref(null);

  /** 表格列配置 */
  const columns = ref([
    {
      type: 'selection',
      columnKey: 'selection',
      width: 50,
      align: 'center',
      fixed: 'left'
    },
    {
      type: 'index',
      columnKey: 'index',
      width: 50,
      align: 'center',
      fixed: 'left'
    }<%# d.columns.forEach(function(item){ %>,
    {
      prop: '<% item.prop %>',
      label: '<% item.label %>',
      align: 'center',
      minWidth: 110<%# if(item.dictType){ %>,
      slot: '<% item.prop %>'<%# } %>
    }<%# }); %>,
    {
      columnKey: 'action',
      label: '操作',
      width: 180,
      align: 'center',
      slot: 'action',
      hideInPrint: true,
      hideInExport: true
    }
  ]);

  /** 表格选中数据 */
  const selections = ref([]);

  /** 当前编辑数据 */
  const current = ref(null);

  /** 是否显示编辑弹窗 */
  const showEdit = ref(false);

  /** 表格数据源 */
  const datasource = ({ pages, where }) => {
    return page<% d.modelTypeName %>s({ ...where, ...pages });
  };

  /** 搜索 */
  const reload = (where) => {
    tableRef.value?.reload?.({ page: 1, where });
  };

  /** 打开编辑弹窗 */
  const openEdit = (row) => {
    current.value = row ?? null;
    showEdit.value = true;
  };

  /** 批量删除 */
  const removeBatch = (row) => {
    const rows = row == null ? selections.value : [row];
    if (!rows.length) {
      EleMessage.error('请至少选择一条数据');
      return;
    }
    ElMessageBox.confirm(
      \`是否确认删除<% d.delTipName %>为"\${rows.map((d) => d.<% d.delTipKey %>).join()}"的数据项?\`,
      '系统提示',
      { type: 'warning', draggable: true }
    )
      .then(() => {
        const loading = EleMessage.loading({
          message: '请求中..',
          plain: true
        });
        remove<% d.modelTypeName %>s(rows.map((d) => d.<% d.primaryKey %>))
          .then(() => {
            loading.close();
            EleMessage.success('删除成功');
            reload();
          })
          .catch((e) => {
            loading.close();
            EleMessage.error(e.message);
          });
      })
      .catch(() => {});
  };

  /** 导出数据 */
  const exportData = () => {
    const loading = EleMessage.loading({
      message: '请求中..',
      plain: true
    });
    tableRef.value?.fetch?.(({ where }) => {
      export<% d.modelTypeName %>s(where)
        .then(() => {
          loading.close();
        })
        .catch((e) => {
          loading.close();
          EleMessage.error(e.message);
        });
    });
  };
<\/script>
`,zt=`<!-- 搜索表单 -->
<template>
  <ele-card :body-style="{ paddingBottom: '2px' }">
    <el-form label-width="72px" @keyup.enter="search" @submit.prevent="">
      <el-row :gutter="8"><%# d.queryForm.forEach(function(item){ %>
        <el-col :lg="6" :md="12" :sm="12" :xs="24">
          <el-form-item label="<% item.label %>">
            <%# if(item.dictType){ %><dict-data
              code="<% item.dictType %>"
              v-model="form.<% item.prop %>"
              placeholder="请选择"
            /><%# }else{ %><el-input
              clearable
              v-model.trim="form.<% item.prop %>"
              placeholder="请输入"
            /><%# } %>
          </el-form-item>
        </el-col><%# }); %>
        <el-col :lg="6" :md="12" :sm="12" :xs="24">
          <el-form-item label-width="16px">
            <el-button type="primary" @click="search">查询</el-button>
            <el-button @click="reset">重置</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </ele-card>
</template>

<script setup>
  import { useFormData } from '@/utils/use-form-data';

  const emit = defineEmits(['search']);

  /** 表单数据 */
  const [form, resetFields] = useFormData({<%# d.queryForm.forEach(function(item,i){ %>
    <% item.prop %>: <% item.isString ? "''" : 'void 0' %><% i === (d.queryForm.length - 1) ? '' : ',' %><%# }); %>
  });

  /** 搜索 */
  const search = () => {
    emit('search', { ...form });
  };

  /**  重置 */
  const reset = () => {
    resetFields();
    search();
  };
<\/script>
`,At=`<!-- 编辑弹窗 -->
<template>
  <ele-modal
    form
    :width="460"
    v-model="visible"
    :title="isUpdate ? '修改<% d.modelText %>' : '添加<% d.modelText %>'"
    @open="handleOpen"
  >
    <el-form
      ref="formRef"
      :model="form"
      :rules="rules"
      label-width="80px"
      @submit.prevent=""
    ><%# d.editForm.forEach(function(item){ %>
      <el-form-item label="<% item.label %>" prop="<% item.prop %>">
        <%# if(item.dictType){ %><dict-data
          code="<% item.dictType %>"<%# if(['radio','checkbox'].includes(item.formType)){ %>
          type="<% item.formType %>"<%# } %>
          v-model="form.<% item.prop %>"
        /><%# }else if(item.formType==='textarea'){ %><el-input
          :rows="4"
          type="textarea"
          v-model="form.<% item.prop %>"
          placeholder="请输入<% item.label %>"
        /><%# }else if(item.formType==='datetime'){ %><el-date-picker
          v-model="form.<% item.prop %>"
          value-format="YYYY-MM-DD"
          placeholder="请选择<% item.label %>"
          class="ele-fluid"
        /><%# }else{ %><el-input
          clearable
          v-model="form.<% item.prop %>"
          placeholder="请输入<% item.label %>"
        /><%# } %>
      </el-form-item><%# }); %>
    </el-form>
    <template #footer>
      <el-button @click="handleCancel">取消</el-button>
      <el-button type="primary" :loading="loading" @click="save">
        保存
      </el-button>
    </template>
  </ele-modal>
</template>

<script setup>
  import { ref, reactive, nextTick } from 'vue';
  import { EleMessage } from 'ele-admin-plus/es';
  import { useFormData } from '@/utils/use-form-data';
  import { add<% d.modelTypeName %>, update<% d.modelTypeName %> } from '@/api/<% d.moduleName %>/<% d.modelName %>';

  const props = defineProps({
    /** 修改回显的数据 */
    data: Object
  });

  const emit = defineEmits(['done']);

  /** 弹窗是否打开 */
  const visible = defineModel({ type: Boolean });

  /** 是否是修改 */
  const isUpdate = ref(false);

  /** 提交状态 */
  const loading = ref(false);

  /** 表单实例 */
  const formRef = ref(null);

  /** 表单数据 */
  const [form, resetFields, assignFields] = useFormData({
    <% d.primaryKey %>: void 0<%# d.editForm.forEach(function(item){ %>,
    <% item.prop %>: <% item.isString ? "''" : 'void 0' %><%# }); %>
  });

  /** 表单验证规则 */
  const rules = reactive({<%# d.editRules.forEach(function(item,i){ %>
    <% item.prop %>: [
      {
        required: true,
        message: '请输入<% item.label %>',
        type: '<% item.type %>',
        trigger: '<% item.trigger %>'
      }
    ]<% i === (d.editRules.length - 1) ? '' : ',' %><%# }); %>
  });

  /** 关闭弹窗 */
  const handleCancel = () => {
    visible.value = false;
  };

  /** 保存编辑 */
  const save = () => {
    formRef.value?.validate?.((valid) => {
      if (!valid) {
        return;
      }
      loading.value = true;
      const saveOrUpdate = isUpdate.value ? update<% d.modelTypeName %> : add<% d.modelTypeName %>;
      saveOrUpdate(form)
        .then((msg) => {
          loading.value = false;
          EleMessage.success(msg);
          handleCancel();
          emit('done');
        })
        .catch((e) => {
          loading.value = false;
          EleMessage.error(e.message);
        });
    });
  };

  /** 弹窗打开事件 */
  const handleOpen = () => {
    if (props.data) {
      assignFields(props.data);
      isUpdate.value = true;
    } else {
      resetFields();
      isUpdate.value = false;
    }
    nextTick(() => {
      nextTick(() => {
        formRef.value?.clearValidate?.();
      });
    });
  };
<\/script>
`,Dt=`import request from '@/utils/request';
import { download, toFormData, checkDownloadRes } from '@/utils/common';

/**
 * 分页查询<% d.modelText %>
 */
export async function page<% d.modelTypeName %>s(params) {
  const res = await request.get('/<% d.moduleName %>/<% d.modelName %>/list', { params });
  if (res.data.code === 200) {
    return res.data;
  }
  return Promise.reject(new Error(res.data.msg));
}

/**
 * 查询全部<% d.modelText %>
 */
export async function list<% d.modelTypeName %>s(params) {
  const res = await request.get('/<% d.moduleName %>/<% d.modelName %>/list', { params });
  if (res.data.code === 200) {
    return res.data.data;
  }
  return Promise.reject(new Error(res.data.msg));
}

/**
 * 根据id查询<% d.modelText %>
 */
export async function get<% d.modelTypeName %>(id) {
  const res = await request.get('/<% d.moduleName %>/<% d.modelName %>/' + id);
  if (res.data.code === 200) {
    return res.data;
  }
  return Promise.reject(new Error(res.data.msg));
}

/**
 * 添加<% d.modelText %>
 */
export async function add<% d.modelTypeName %>(data) {
  const res = await request.post('/<% d.moduleName %>/<% d.modelName %>', data);
  if (res.data.code === 200) {
    return res.data.msg;
  }
  return Promise.reject(new Error(res.data.msg));
}

/**
 * 修改<% d.modelText %>
 */
export async function update<% d.modelTypeName %>(data) {
  const res = await request.put('/<% d.moduleName %>/<% d.modelName %>', data);
  if (res.data.code === 200) {
    return res.data.msg;
  }
  return Promise.reject(new Error(res.data.msg));
}

/**
 * 删除<% d.modelText %>
 */
export async function remove<% d.modelTypeName %>(id) {
  const res = await request.delete('/<% d.moduleName %>/<% d.modelName %>/' + id);
  if (res.data.code === 200) {
    return res.data.msg;
  }
  return Promise.reject(new Error(res.data.msg));
}

/**
 * 批量删除<% d.modelText %>
 */
export async function remove<% d.modelTypeName %>s(ids) {
  const res = await request.delete('/<% d.moduleName %>/<% d.modelName %>/' + ids.join());
  if (res.data.code === 200) {
    return res.data.msg;
  }
  return Promise.reject(new Error(res.data.msg));
}

/**
 * 导出<% d.modelText %>
 */
export async function export<% d.modelTypeName %>s(params) {
  const res = await request({
    url: '/<% d.moduleName %>/<% d.modelName %>/export',
    method: 'POST',
    data: toFormData(params),
    responseType: 'blob'
  });
  await checkDownloadRes(res);
  download(res.data, \`<% d.modelName %>_\${Date.now()}.xlsx\`);
}
`,Rt=`<template>
  <ele-page>
    <!-- 搜索表单 -->
    <<% d.modelName %>-search @search="reload" />
    <ele-card :body-style="{ paddingTop: '8px' }">
      <!-- 表格 -->
      <ele-pro-table
        sticky
        ref="tableRef"
        row-key="<% d.primaryKey %>"
        :columns="columns"
        :datasource="datasource"
        :show-overflow-tooltip="true"
        :highlight-current-row="true"
        :export-config="{ fileName: '<% d.modelText %>' }"
        :default-expand-all="true"
        :pagination="false"
        cache-key="<% d.tableCacheKey %>"
      >
        <template #toolbar>
          <el-button
            v-permission="'<% d.moduleName %>:<% d.modelName %>:add'"
            type="primary"
            class="ele-btn-icon"
            :icon="PlusOutlined"
            @click="openEdit()"
          >
            新建
          </el-button>
          <el-button
            class="ele-btn-icon"
            :icon="ColumnHeightOutlined"
            @click="expandAll"
          >
            展开全部
          </el-button>
          <el-button
            class="ele-btn-icon"
            :icon="VerticalAlignMiddleOutlined"
            @click="foldAll"
          >
            折叠全部
          </el-button>
        </template>
        <template #action="{ row }">
          <el-link
            v-permission="'<% d.moduleName %>:<% d.modelName %>:add'"
            type="primary"
            :underline="false"
            @click="openEdit(null, row.<% d.treeCode %>)"
          >
            添加
          </el-link>
          <el-divider
            v-permission="'<% d.moduleName %>:<% d.modelName %>:add'"
            direction="vertical"
            style="margin: 0 8px"
          />
          <el-link
            v-permission="'<% d.moduleName %>:<% d.modelName %>:edit'"
            type="primary"
            :underline="false"
            @click="openEdit(row)"
          >
            修改
          </el-link>
          <el-divider
            v-permission="'<% d.moduleName %>:<% d.modelName %>:remove'"
            direction="vertical"
            style="margin: 0 8px"
          />
          <el-link
            v-permission="'<% d.moduleName %>:<% d.modelName %>:remove'"
            type="danger"
            :underline="false"
            @click="remove(row)"
          >
            删除
          </el-link>
        </template><%# d.columns.forEach(function(item){if(item.dictType){ %>
        <template #<% item.prop %>="{ row }">
          <dict-data
            code="<% item.dictType %>"
            type="tag"
            :model-value="row.<% item.prop %>"
          />
        </template><%# }}); %>
      </ele-pro-table>
    </ele-card>
    <!-- 编辑弹窗 -->
    <<% d.modelName %>-edit
      v-model="showEdit"
      :data="current"
      :parent-id="parentId"
      @done="reload"
    />
  </ele-page>
</template>

<script setup>
  import { ref } from 'vue';
  import {
    PlusOutlined,
    ColumnHeightOutlined,
    VerticalAlignMiddleOutlined
  } from '@/components/icons';
  import { ElMessageBox } from 'element-plus/es';
  import { EleMessage, toTree } from 'ele-admin-plus/es';
  import <% d.modelTypeName %>Search from './components/<% d.modelName %>-search.vue';
  import <% d.modelTypeName %>Edit from './components/<% d.modelName %>-edit.vue';
  import { list<% d.modelTypeName %>s, remove<% d.modelTypeName %> } from '@/api/<% d.moduleName %>/<% d.modelName %>';

  defineOptions({ name: '<% d.moduleTypeName %><% d.modelTypeName %>' });

  /** 表格实例 */
  const tableRef = ref(null);

  /** 表格列配置 */
  const columns = ref([
    {
      type: 'index',
      columnKey: 'index',
      width: 50,
      align: 'center',
      fixed: 'left'
    }<%# d.columns.forEach(function(item,columnItemIndex){ %>,
    {
      prop: '<% item.prop %>',
      label: '<% item.label %>',
      align: '<% columnItemIndex==0?'left':'center' %>',
      minWidth: 110<%# if(item.dictType){ %>,
      slot: '<% item.prop %>'<%# } %>
    }<%# }); %>,
    {
      columnKey: 'action',
      label: '操作',
      width: 180,
      align: 'center',
      slot: 'action',
      hideInPrint: true,
      hideInExport: true
    }
  ]);

  /** 当前编辑数据 */
  const current = ref(null);

  /** 是否显示编辑弹窗 */
  const showEdit = ref(false);

  /** 上级菜单id */
  const parentId = ref();

  /** 表格数据源 */
  const datasource = async ({ where }) => {
    const data = await list<% d.modelTypeName %>s({ ...where });
    return toTree({
      data,
      idField: '<% d.treeCode %>',
      parentIdField: '<% d.treeParentCode %>'
    });
  };

  /** 搜索 */
  const reload = (where) => {
    tableRef.value?.reload?.({ where });
  };

  /** 打开编辑弹窗 */
  const openEdit = (row, id) => {
    current.value = row ?? null;
    parentId.value = id;
    showEdit.value = true;
  };

  /** 删除单个 */
  const remove = (row) => {
    ElMessageBox.confirm(
      '是否确认删除<% d.delTipName %>为"' + row.<% d.delTipKey %> + '"的数据项?',
      '系统提示',
      { type: 'warning', draggable: true }
    )
      .then(() => {
        const loading = EleMessage.loading({
          message: '请求中..',
          plain: true
        });
        remove<% d.modelTypeName %>(row.<% d.primaryKey %>)
          .then(() => {
            loading.close();
            EleMessage.success('删除成功');
            reload();
          })
          .catch((e) => {
            loading.close();
            EleMessage.error(e.message);
          });
      })
      .catch(() => {});
  };

  /** 展开全部 */
  const expandAll = () => {
    tableRef.value?.toggleRowExpansionAll?.(true);
  };

  /** 折叠全部 */
  const foldAll = () => {
    tableRef.value?.toggleRowExpansionAll?.(false);
  };
<\/script>
`,Bt=`<!-- 编辑弹窗 -->
<template>
  <ele-modal
    form
    :width="460"
    v-model="visible"
    :title="isUpdate ? '修改<% d.modelText %>' : '添加<% d.modelText %>'"
    @open="handleOpen"
  >
    <el-form
      ref="formRef"
      :model="form"
      :rules="rules"
      label-width="80px"
      @submit.prevent=""
    ><%# d.editForm.forEach(function(item){ %>
      <el-form-item label="<% item.label %>" prop="<% item.prop %>">
        <%# if(item.prop==d.treeParentCode){ %><el-tree-select
          clearable
          check-strictly
          default-expand-all
          :data="treeSelectData"
          node-key="<% d.treeCode %>"
          :props="{ label: '<% d.treeName %>' }"
          placeholder="请选择<% item.label %>"
          class="ele-fluid"
          v-model="form.<% item.prop %>"
        /><%# }else if(item.dictType){ %><dict-data
          code="<% item.dictType %>"<%# if(['radio','checkbox'].includes(item.formType)){ %>
          type="<% item.formType %>"<%# } %>
          v-model="form.<% item.prop %>"
        /><%# }else if(item.formType==='textarea'){ %><el-input
          :rows="4"
          type="textarea"
          v-model="form.<% item.prop %>"
          placeholder="请输入<% item.label %>"
        /><%# }else if(item.formType==='datetime'){ %><el-date-picker
          v-model="form.<% item.prop %>"
          value-format="YYYY-MM-DD"
          placeholder="请选择<% item.label %>"
          class="ele-fluid"
        /><%# }else{ %><el-input
          clearable
          v-model="form.<% item.prop %>"
          placeholder="请输入<% item.label %>"
        /><%# } %>
      </el-form-item><%# }); %>
    </el-form>
    <template #footer>
      <el-button @click="handleCancel">取消</el-button>
      <el-button type="primary" :loading="loading" @click="save">
        保存
      </el-button>
    </template>
  </ele-modal>
</template>

<script setup>
  import { ref, reactive, nextTick } from 'vue';
  import { EleMessage, toTree } from 'ele-admin-plus/es';
  import { useFormData } from '@/utils/use-form-data';
  import { add<% d.modelTypeName %>, update<% d.modelTypeName %>, list<% d.modelTypeName %>s } from '@/api/<% d.moduleName %>/<% d.modelName %>';

  const props = defineProps({
    /** 修改回显的数据 */
    data: Object,
    /** 上级id */
    parentId: Number
  });

  const emit = defineEmits(['done']);

  /** 弹窗是否打开 */
  const visible = defineModel({ type: Boolean });

  /** 是否是修改 */
  const isUpdate = ref(false);

  /** 提交状态 */
  const loading = ref(false);

  /** 表单实例 */
  const formRef = ref(null);

  /** 表单数据 */
  const [form, resetFields, assignFields] = useFormData({
    <% d.primaryKey %>: void 0<%# d.editForm.forEach(function(item){ %>,
    <% item.prop %>: <% item.isString ? "''" : 'void 0' %><%# }); %>
  });

  /** 表单验证规则 */
  const rules = reactive({<%# d.editRules.forEach(function(item,i){ %>
    <% item.prop %>: [
      {
        required: true,
        message: '请输入<% item.label %>',
        type: '<% item.type %>',
        trigger: '<% item.trigger %>'
      }
    ]<% i === (d.editRules.length - 1) ? '' : ',' %><%# }); %>
  });

  /** 关闭弹窗 */
  const handleCancel = () => {
    visible.value = false;
  };

  /** 保存编辑 */
  const save = () => {
    formRef.value?.validate?.((valid) => {
      if (!valid) {
        return;
      }
      loading.value = true;
      const saveOrUpdate = isUpdate.value ? update<% d.modelTypeName %> : add<% d.modelTypeName %>;
      saveOrUpdate({ ...form, <% d.treeParentCode %>: form.parentId || 0 })
        .then((msg) => {
          loading.value = false;
          EleMessage.success(msg);
          handleCancel();
          emit('done');
        })
        .catch((e) => {
          loading.value = false;
          EleMessage.error(e.message);
        });
    });
  };

  /** 弹窗打开事件 */
  const handleOpen = () => {
    if (props.data) {
      assignFields({
        ...props.data,
        <% d.treeParentCode %>: props.data.parentId || void 0
      });
      isUpdate.value = true;
    } else {
      resetFields();
      form.<% d.treeParentCode %> = props.parentId;
      isUpdate.value = false;
    }
    nextTick(() => {
      nextTick(() => {
        formRef.value?.clearValidate?.();
      });
    });
  };

  /** 下拉树数据 */
  const treeSelectData = ref([]);

  /** 获取下拉树数据 */
  list<% d.modelTypeName %>s()
    .then((list) => {
      treeSelectData.value = toTree({
        data: list,
        idField: '<% d.treeCode %>',
        parentIdField: '<% d.treeParentCode %>'
      });
    })
    .catch((e) => {
      EleMessage.error(e.message);
    });
<\/script>
`,Ft=`<!-- 编辑弹窗 -->
<template>
  <ele-modal
    form
    :width="680"
    v-model="visible"
    :title="isUpdate ? '修改<% d.modelText %>' : '添加<% d.modelText %>'"
    @open="handleOpen"
  >
    <el-form
      ref="formRef"
      :model="form"
      :rules="rules"
      label-width="80px"
      @submit.prevent=""
    ><%# d.editForm.forEach(function(item){ %>
      <el-form-item label="<% item.label %>" prop="<% item.prop %>">
        <%# if(item.dictType){ %><dict-data
          code="<% item.dictType %>"<%# if(['radio','checkbox'].includes(item.formType)){ %>
          type="<% item.formType %>"<%# } %>
          v-model="form.<% item.prop %>"
        /><%# }else if(item.formType==='textarea'){ %><el-input
          :rows="4"
          type="textarea"
          v-model="form.<% item.prop %>"
          placeholder="请输入<% item.label %>"
        /><%# }else if(item.formType==='datetime'){ %><el-date-picker
          v-model="form.<% item.prop %>"
          value-format="YYYY-MM-DD"
          placeholder="请选择<% item.label %>"
          class="ele-fluid"
        /><%# }else{ %><el-input
          clearable
          v-model="form.<% item.prop %>"
          placeholder="请输入<% item.label %>"
        /><%# } %>
      </el-form-item><%# }); %>
      <el-divider style="margin: 32px 0 16px 0"><% d.subTable.modelText %>信息</el-divider>
      <ele-pro-table
        :loading="subTableLoading"
        row-key="<% d.subTable.primaryKey %>"
        :columns="columns"
        :datasource="form.<% d.subTable.classModelName %>List"
        v-model:selections="selections"
        :pagination="false"
        :tools="false"
        cell-class-name="editable-table-cell"
        class="editable-table"
      >
        <template #toolbar>
          <el-button
            type="primary"
            class="ele-btn-icon"
            :icon="PlusOutlined"
            @click="handleAdd"
          >
            添加
          </el-button>
          <el-button
            type="danger"
            class="ele-btn-icon"
            :icon="DeleteOutlined"
            @click="handleRemove"
          >
            删除
          </el-button>
        </template><%# d.subTable.editForm.forEach(function(item){ %>
        <template #<% item.prop %>="{ row, $index }">
          <el-form-item
            :prop="'<% d.subTable.classModelName %>List.' + $index + '.<% item.prop %>'"
            label-width="0px"
            style="margin-bottom: 0px"
          >
            <%# if(item.dictType){ %><dict-data
              code="<% item.dictType %>"<%# if(['radio','checkbox'].includes(item.formType)){ %>
              type="<% item.formType %>"<%# } %>
              v-model="row.<% item.prop %>"
            /><%# }else if(item.formType==='datetime'){ %><el-date-picker
              v-model="row.<% item.prop %>"
              value-format="YYYY-MM-DD"
              placeholder="请选择<% item.label %>"
              class="ele-fluid"
            /><%# }else{ %><el-input
              clearable
              v-model="row.<% item.prop %>"
              placeholder="请输入<% item.label %>"
            /><%# } %>
          </el-form-item>
        </template><%# }); %>
      </ele-pro-table>
    </el-form>
    <template #footer>
      <el-button @click="handleCancel">取消</el-button>
      <el-button type="primary" :loading="loading" @click="save">
        保存
      </el-button>
    </template>
  </ele-modal>
</template>

<script setup>
  import { ref, reactive, nextTick } from 'vue';
  import { EleMessage } from 'ele-admin-plus/es';
  import { PlusOutlined, DeleteOutlined } from '@/components/icons';
  import { useFormData } from '@/utils/use-form-data';
  import { add<% d.modelTypeName %>, update<% d.modelTypeName %>, get<% d.modelTypeName %> } from '@/api/<% d.moduleName %>/<% d.modelName %>';

  const props = defineProps({
    /** 修改回显的数据 */
    data: Object
  });

  const emit = defineEmits(['done']);

  /** 弹窗是否打开 */
  const visible = defineModel({ type: Boolean });

  /** 是否是修改 */
  const isUpdate = ref(false);

  /** 提交状态 */
  const loading = ref(false);

  /** 表单实例 */
  const formRef = ref(null);

  /** 表单数据 */
  const [form, resetFields, assignFields] = useFormData({
    <% d.subTable.classModelName %>List: [],
    <% d.primaryKey %>: void 0<%# d.editForm.forEach(function(item){ %>,
    <% item.prop %>: <% item.isString ? "''" : 'void 0' %><%# }); %>
  });

  /** 表单验证规则 */
  const rules = reactive({<%# d.editRules.forEach(function(item,i){ %>
    <% item.prop %>: [
      {
        required: true,
        message: '请输入<% item.label %>',
        type: '<% item.type %>',
        trigger: '<% item.trigger %>'
      }
    ]<% i === (d.editRules.length - 1) ? '' : ',' %><%# }); %>
  });

  /** 关闭弹窗 */
  const handleCancel = () => {
    visible.value = false;
  };

  /** 保存编辑 */
  const save = () => {
    formRef.value?.validate?.((valid) => {
      if (!valid) {
        return;
      }
      loading.value = true;
      const saveOrUpdate = isUpdate.value ? update<% d.modelTypeName %> : add<% d.modelTypeName %>;
      saveOrUpdate(form)
        .then((msg) => {
          loading.value = false;
          EleMessage.success(msg);
          handleCancel();
          emit('done');
        })
        .catch((e) => {
          loading.value = false;
          EleMessage.error(e.message);
        });
    });
  };

  /** 弹窗打开事件 */
  const handleOpen = () => {
    if (props.data) {
      assignFields({
        ...props.data,
        <% d.subTable.classModelName %>List: []
      });
      isUpdate.value = true;
      subTableLoading.value = true;
      get<% d.modelTypeName %>(props.data.<% d.primaryKey %>)
        .then((info) => {
          subTableLoading.value = false;
          assignFields({
            ...info,
            <% d.subTable.classModelName %>List: info.<% d.subTable.classModelName %>List || []
          });
        })
        .catch((e) => {
          subTableLoading.value = false;
          EleMessage.error(e.message);
        });
    } else {
      resetFields();
      isUpdate.value = false;
    }
    nextTick(() => {
      nextTick(() => {
        formRef.value?.clearValidate?.();
      });
    });
  };

  /** 表格加载状态 */
  const subTableLoading = ref(false);

  /** 表格列配置 */
  const columns = ref([
    {
      type: 'selection',
      columnKey: 'selection',
      width: 50,
      align: 'center',
      fixed: 'left'
    },
    {
      type: 'index',
      columnKey: 'index',
      width: 50,
      align: 'center',
      fixed: 'left'
    }<%# d.subTable.editForm.forEach(function(item){ %>,
    {
      prop: '<% item.prop %>',
      label: '<% item.label %>',
      align: 'center',
      minWidth: 110,
      slot: '<% item.prop %>'
    }<%# }); %>
  ]);

  /** 表格选中数据 */
  const selections = ref([]);

  let tempIndex = 0;

  /** 添加 */
  const handleAdd = () => {
    tempIndex++;
    const item = {};
    item.<% d.subTable.primaryKey %> = '_temp_' + tempIndex;
    form.<% d.subTable.classModelName %>List.push(item);
  };

  /** 删除 */
  const handleRemove = () => {
    if (!selections.value.length) {
      EleMessage.error('请至少选择一条数据');
      return;
    }
    form.<% d.subTable.classModelName %>List = form.<% d.subTable.classModelName %>List.filter((d) => {
      return !selections.value.includes(d);
    });
  };
<\/script>

<style lang="scss" scoped>
  .editable-table :deep(.editable-table-cell) {
    position: static;

    & > .cell {
      overflow: visible;
    }
  }
</style>
`;function lt(U){const L={},b=[],N=[],w=[],l=[],a={};U.info.columns.forEach(o=>{o.isPk=="1"&&(L.prop=o.javaField,L.label=o.columnComment),o.isList=="1"&&b.push({prop:o.javaField,label:o.columnComment,dictType:o.dictType}),o.isQuery=="1"&&N.push({prop:o.javaField,label:o.columnComment,dictType:o.dictType,isString:["String","Date"].includes(o.javaType)}),o.isEdit=="1"&&(w.push({prop:o.javaField,label:o.columnComment,dictType:o.dictType,formType:o.htmlType,isString:["String","Date"].includes(o.javaType)}),o.isRequired=="1"&&l.push({prop:o.javaField,label:o.columnComment,type:["String","Date"].includes(o.javaType)?"string":"number",trigger:["select","radio","checkbox","imageUpload","fileUpload","editor"].includes(o.htmlType)?"change":"blur"})),U.info.treeCode&&o.columnName===U.info.treeCode&&(a.treeCode=o.javaField),U.info.treeParentCode&&o.columnName===U.info.treeParentCode&&(a.treeParentCode=o.javaField),U.info.treeName&&o.columnName===U.info.treeName&&(a.treeName=o.javaField)});const r=U.info.moduleName,s=gt(U.info.businessName),h=L.prop||"key",p=b.length?b[0]:L,g=U.info.sub&&U.info.subTableName&&U.tables?U.tables.find(o=>o.tableName===U.info.subTableName):void 0;return{modelName:U.info.businessName,modelTypeName:s,modelText:U.info.functionName,primaryKey:h,moduleName:r,moduleTypeName:gt(r),tableCacheKey:r+s+"Table",columns:b,delTipKey:p.prop||h,delTipName:p.label||"",queryForm:N,editForm:w,editRules:l,classModelName:gr(U.info.className),subTable:g?lt({info:g}):void 0,...a}}function gt(U){return U==null||U===""?"":U.charAt(0).toUpperCase()+U.slice(1)}function gr(U){return U==null||U===""?"":U.charAt(0).toLowerCase()+U.slice(1)}function _r(U,L){xt(U,L,"text/plain;charset=utf-8")}var Qe={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/var _t;function br(){return _t||(_t=1,function(U,L){(function(b){U.exports=b()})(function(){return function b(N,w,l){function a(h,p){if(!w[h]){if(!N[h]){var g=typeof Ze=="function"&&Ze;if(!p&&g)return g(h,!0);if(r)return r(h,!0);var o=new Error("Cannot find module '"+h+"'");throw o.code="MODULE_NOT_FOUND",o}var i=w[h]={exports:{}};N[h][0].call(i.exports,function(c){var n=N[h][1][c];return a(n||c)},i,i.exports,b,N,w,l)}return w[h].exports}for(var r=typeof Ze=="function"&&Ze,s=0;s<l.length;s++)a(l[s]);return a}({1:[function(b,N,w){var l=b("./utils"),a=b("./support"),r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";w.encode=function(s){for(var h,p,g,o,i,c,n,m=[],d=0,u=s.length,v=u,C=l.getTypeOf(s)!=="string";d<s.length;)v=u-d,g=C?(h=s[d++],p=d<u?s[d++]:0,d<u?s[d++]:0):(h=s.charCodeAt(d++),p=d<u?s.charCodeAt(d++):0,d<u?s.charCodeAt(d++):0),o=h>>2,i=(3&h)<<4|p>>4,c=1<v?(15&p)<<2|g>>6:64,n=2<v?63&g:64,m.push(r.charAt(o)+r.charAt(i)+r.charAt(c)+r.charAt(n));return m.join("")},w.decode=function(s){var h,p,g,o,i,c,n=0,m=0,d="data:";if(s.substr(0,d.length)===d)throw new Error("Invalid base64 input, it looks like a data url.");var u,v=3*(s=s.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(s.charAt(s.length-1)===r.charAt(64)&&v--,s.charAt(s.length-2)===r.charAt(64)&&v--,v%1!=0)throw new Error("Invalid base64 input, bad content length.");for(u=a.uint8array?new Uint8Array(0|v):new Array(0|v);n<s.length;)h=r.indexOf(s.charAt(n++))<<2|(o=r.indexOf(s.charAt(n++)))>>4,p=(15&o)<<4|(i=r.indexOf(s.charAt(n++)))>>2,g=(3&i)<<6|(c=r.indexOf(s.charAt(n++))),u[m++]=h,i!==64&&(u[m++]=p),c!==64&&(u[m++]=g);return u}},{"./support":30,"./utils":32}],2:[function(b,N,w){var l=b("./external"),a=b("./stream/DataWorker"),r=b("./stream/Crc32Probe"),s=b("./stream/DataLengthProbe");function h(p,g,o,i,c){this.compressedSize=p,this.uncompressedSize=g,this.crc32=o,this.compression=i,this.compressedContent=c}h.prototype={getContentWorker:function(){var p=new a(l.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new s("data_length")),g=this;return p.on("end",function(){if(this.streamInfo.data_length!==g.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),p},getCompressedWorker:function(){return new a(l.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},h.createWorkerFrom=function(p,g,o){return p.pipe(new r).pipe(new s("uncompressedSize")).pipe(g.compressWorker(o)).pipe(new s("compressedSize")).withStreamInfo("compression",g)},N.exports=h},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(b,N,w){var l=b("./stream/GenericWorker");w.STORE={magic:"\0\0",compressWorker:function(){return new l("STORE compression")},uncompressWorker:function(){return new l("STORE decompression")}},w.DEFLATE=b("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(b,N,w){var l=b("./utils"),a=function(){for(var r,s=[],h=0;h<256;h++){r=h;for(var p=0;p<8;p++)r=1&r?3988292384^r>>>1:r>>>1;s[h]=r}return s}();N.exports=function(r,s){return r!==void 0&&r.length?l.getTypeOf(r)!=="string"?function(h,p,g,o){var i=a,c=o+g;h^=-1;for(var n=o;n<c;n++)h=h>>>8^i[255&(h^p[n])];return-1^h}(0|s,r,r.length,0):function(h,p,g,o){var i=a,c=o+g;h^=-1;for(var n=o;n<c;n++)h=h>>>8^i[255&(h^p.charCodeAt(n))];return-1^h}(0|s,r,r.length,0):0}},{"./utils":32}],5:[function(b,N,w){w.base64=!1,w.binary=!1,w.dir=!1,w.createFolders=!0,w.date=null,w.compression=null,w.compressionOptions=null,w.comment=null,w.unixPermissions=null,w.dosPermissions=null},{}],6:[function(b,N,w){var l=null;l=typeof Promise<"u"?Promise:b("lie"),N.exports={Promise:l}},{lie:37}],7:[function(b,N,w){var l=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",a=b("pako"),r=b("./utils"),s=b("./stream/GenericWorker"),h=l?"uint8array":"array";function p(g,o){s.call(this,"FlateWorker/"+g),this._pako=null,this._pakoAction=g,this._pakoOptions=o,this.meta={}}w.magic="\b\0",r.inherits(p,s),p.prototype.processChunk=function(g){this.meta=g.meta,this._pako===null&&this._createPako(),this._pako.push(r.transformTo(h,g.data),!1)},p.prototype.flush=function(){s.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},p.prototype.cleanUp=function(){s.prototype.cleanUp.call(this),this._pako=null},p.prototype._createPako=function(){this._pako=new a[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var g=this;this._pako.onData=function(o){g.push({data:o,meta:g.meta})}},w.compressWorker=function(g){return new p("Deflate",g)},w.uncompressWorker=function(){return new p("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(b,N,w){function l(i,c){var n,m="";for(n=0;n<c;n++)m+=String.fromCharCode(255&i),i>>>=8;return m}function a(i,c,n,m,d,u){var v,C,x=i.file,z=i.compression,k=u!==h.utf8encode,V=r.transformTo("string",u(x.name)),O=r.transformTo("string",h.utf8encode(x.name)),F=x.comment,G=r.transformTo("string",u(F)),y=r.transformTo("string",h.utf8encode(F)),B=O.length!==x.name.length,t=y.length!==F.length,j="",ie="",Z="",se=x.dir,q=x.date,ne={crc32:0,compressedSize:0,uncompressedSize:0};c&&!n||(ne.crc32=i.crc32,ne.compressedSize=i.compressedSize,ne.uncompressedSize=i.uncompressedSize);var D=0;c&&(D|=8),k||!B&&!t||(D|=2048);var I=0,re=0;se&&(I|=16),d==="UNIX"?(re=798,I|=function(H,W){var _e=H;return H||(_e=W?16893:33204),(65535&_e)<<16}(x.unixPermissions,se)):(re=20,I|=function(H){return 63&(H||0)}(x.dosPermissions)),v=q.getUTCHours(),v<<=6,v|=q.getUTCMinutes(),v<<=5,v|=q.getUTCSeconds()/2,C=q.getUTCFullYear()-1980,C<<=4,C|=q.getUTCMonth()+1,C<<=5,C|=q.getUTCDate(),B&&(ie=l(1,1)+l(p(V),4)+O,j+="up"+l(ie.length,2)+ie),t&&(Z=l(1,1)+l(p(G),4)+y,j+="uc"+l(Z.length,2)+Z);var X="";return X+=`
\0`,X+=l(D,2),X+=z.magic,X+=l(v,2),X+=l(C,2),X+=l(ne.crc32,4),X+=l(ne.compressedSize,4),X+=l(ne.uncompressedSize,4),X+=l(V.length,2),X+=l(j.length,2),{fileRecord:g.LOCAL_FILE_HEADER+X+V+j,dirRecord:g.CENTRAL_FILE_HEADER+l(re,2)+X+l(G.length,2)+"\0\0\0\0"+l(I,4)+l(m,4)+V+j+G}}var r=b("../utils"),s=b("../stream/GenericWorker"),h=b("../utf8"),p=b("../crc32"),g=b("../signature");function o(i,c,n,m){s.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=c,this.zipPlatform=n,this.encodeFileName=m,this.streamFiles=i,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}r.inherits(o,s),o.prototype.push=function(i){var c=i.meta.percent||0,n=this.entriesCount,m=this._sources.length;this.accumulate?this.contentBuffer.push(i):(this.bytesWritten+=i.data.length,s.prototype.push.call(this,{data:i.data,meta:{currentFile:this.currentFile,percent:n?(c+100*(n-m-1))/n:100}}))},o.prototype.openedSource=function(i){this.currentSourceOffset=this.bytesWritten,this.currentFile=i.file.name;var c=this.streamFiles&&!i.file.dir;if(c){var n=a(i,c,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:n.fileRecord,meta:{percent:0}})}else this.accumulate=!0},o.prototype.closedSource=function(i){this.accumulate=!1;var c=this.streamFiles&&!i.file.dir,n=a(i,c,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(n.dirRecord),c)this.push({data:function(m){return g.DATA_DESCRIPTOR+l(m.crc32,4)+l(m.compressedSize,4)+l(m.uncompressedSize,4)}(i),meta:{percent:100}});else for(this.push({data:n.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},o.prototype.flush=function(){for(var i=this.bytesWritten,c=0;c<this.dirRecords.length;c++)this.push({data:this.dirRecords[c],meta:{percent:100}});var n=this.bytesWritten-i,m=function(d,u,v,C,x){var z=r.transformTo("string",x(C));return g.CENTRAL_DIRECTORY_END+"\0\0\0\0"+l(d,2)+l(d,2)+l(u,4)+l(v,4)+l(z.length,2)+z}(this.dirRecords.length,n,i,this.zipComment,this.encodeFileName);this.push({data:m,meta:{percent:100}})},o.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},o.prototype.registerPrevious=function(i){this._sources.push(i);var c=this;return i.on("data",function(n){c.processChunk(n)}),i.on("end",function(){c.closedSource(c.previous.streamInfo),c._sources.length?c.prepareNextSource():c.end()}),i.on("error",function(n){c.error(n)}),this},o.prototype.resume=function(){return!!s.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},o.prototype.error=function(i){var c=this._sources;if(!s.prototype.error.call(this,i))return!1;for(var n=0;n<c.length;n++)try{c[n].error(i)}catch(m){}return!0},o.prototype.lock=function(){s.prototype.lock.call(this);for(var i=this._sources,c=0;c<i.length;c++)i[c].lock()},N.exports=o},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(b,N,w){var l=b("../compressions"),a=b("./ZipFileWorker");w.generateWorker=function(r,s,h){var p=new a(s.streamFiles,h,s.platform,s.encodeFileName),g=0;try{r.forEach(function(o,i){g++;var c=function(u,v){var C=u||v,x=l[C];if(!x)throw new Error(C+" is not a valid compression method !");return x}(i.options.compression,s.compression),n=i.options.compressionOptions||s.compressionOptions||{},m=i.dir,d=i.date;i._compressWorker(c,n).withStreamInfo("file",{name:o,dir:m,date:d,comment:i.comment||"",unixPermissions:i.unixPermissions,dosPermissions:i.dosPermissions}).pipe(p)}),p.entriesCount=g}catch(o){p.error(o)}return p}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(b,N,w){function l(){if(!(this instanceof l))return new l;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var a=new l;for(var r in this)typeof this[r]!="function"&&(a[r]=this[r]);return a}}(l.prototype=b("./object")).loadAsync=b("./load"),l.support=b("./support"),l.defaults=b("./defaults"),l.version="3.10.1",l.loadAsync=function(a,r){return new l().loadAsync(a,r)},l.external=b("./external"),N.exports=l},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(b,N,w){var l=b("./utils"),a=b("./external"),r=b("./utf8"),s=b("./zipEntries"),h=b("./stream/Crc32Probe"),p=b("./nodejsUtils");function g(o){return new a.Promise(function(i,c){var n=o.decompressed.getContentWorker().pipe(new h);n.on("error",function(m){c(m)}).on("end",function(){n.streamInfo.crc32!==o.decompressed.crc32?c(new Error("Corrupted zip : CRC32 mismatch")):i()}).resume()})}N.exports=function(o,i){var c=this;return i=l.extend(i||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:r.utf8decode}),p.isNode&&p.isStream(o)?a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):l.prepareContent("the loaded zip file",o,!0,i.optimizedBinaryString,i.base64).then(function(n){var m=new s(i);return m.load(n),m}).then(function(n){var m=[a.Promise.resolve(n)],d=n.files;if(i.checkCRC32)for(var u=0;u<d.length;u++)m.push(g(d[u]));return a.Promise.all(m)}).then(function(n){for(var m=n.shift(),d=m.files,u=0;u<d.length;u++){var v=d[u],C=v.fileNameStr,x=l.resolve(v.fileNameStr);c.file(x,v.decompressed,{binary:!0,optimizedBinaryString:!0,date:v.date,dir:v.dir,comment:v.fileCommentStr.length?v.fileCommentStr:null,unixPermissions:v.unixPermissions,dosPermissions:v.dosPermissions,createFolders:i.createFolders}),v.dir||(c.file(x).unsafeOriginalName=C)}return m.zipComment.length&&(c.comment=m.zipComment),c})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(b,N,w){var l=b("../utils"),a=b("../stream/GenericWorker");function r(s,h){a.call(this,"Nodejs stream input adapter for "+s),this._upstreamEnded=!1,this._bindStream(h)}l.inherits(r,a),r.prototype._bindStream=function(s){var h=this;(this._stream=s).pause(),s.on("data",function(p){h.push({data:p,meta:{percent:0}})}).on("error",function(p){h.isPaused?this.generatedError=p:h.error(p)}).on("end",function(){h.isPaused?h._upstreamEnded=!0:h.end()})},r.prototype.pause=function(){return!!a.prototype.pause.call(this)&&(this._stream.pause(),!0)},r.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},N.exports=r},{"../stream/GenericWorker":28,"../utils":32}],13:[function(b,N,w){var l=b("readable-stream").Readable;function a(r,s,h){l.call(this,s),this._helper=r;var p=this;r.on("data",function(g,o){p.push(g)||p._helper.pause(),h&&h(o)}).on("error",function(g){p.emit("error",g)}).on("end",function(){p.push(null)})}b("../utils").inherits(a,l),a.prototype._read=function(){this._helper.resume()},N.exports=a},{"../utils":32,"readable-stream":16}],14:[function(b,N,w){N.exports={isNode:typeof Buffer<"u",newBufferFrom:function(l,a){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(l,a);if(typeof l=="number")throw new Error('The "data" argument must not be a number');return new Buffer(l,a)},allocBuffer:function(l){if(Buffer.alloc)return Buffer.alloc(l);var a=new Buffer(l);return a.fill(0),a},isBuffer:function(l){return Buffer.isBuffer(l)},isStream:function(l){return l&&typeof l.on=="function"&&typeof l.pause=="function"&&typeof l.resume=="function"}}},{}],15:[function(b,N,w){function l(x,z,k){var V,O=r.getTypeOf(z),F=r.extend(k||{},p);F.date=F.date||new Date,F.compression!==null&&(F.compression=F.compression.toUpperCase()),typeof F.unixPermissions=="string"&&(F.unixPermissions=parseInt(F.unixPermissions,8)),F.unixPermissions&&16384&F.unixPermissions&&(F.dir=!0),F.dosPermissions&&16&F.dosPermissions&&(F.dir=!0),F.dir&&(x=d(x)),F.createFolders&&(V=m(x))&&u.call(this,V,!0);var G=O==="string"&&F.binary===!1&&F.base64===!1;k&&k.binary!==void 0||(F.binary=!G),(z instanceof g&&z.uncompressedSize===0||F.dir||!z||z.length===0)&&(F.base64=!1,F.binary=!0,z="",F.compression="STORE",O="string");var y=null;y=z instanceof g||z instanceof s?z:c.isNode&&c.isStream(z)?new n(x,z):r.prepareContent(x,z,F.binary,F.optimizedBinaryString,F.base64);var B=new o(x,y,F);this.files[x]=B}var a=b("./utf8"),r=b("./utils"),s=b("./stream/GenericWorker"),h=b("./stream/StreamHelper"),p=b("./defaults"),g=b("./compressedObject"),o=b("./zipObject"),i=b("./generate"),c=b("./nodejsUtils"),n=b("./nodejs/NodejsStreamInputAdapter"),m=function(x){x.slice(-1)==="/"&&(x=x.substring(0,x.length-1));var z=x.lastIndexOf("/");return 0<z?x.substring(0,z):""},d=function(x){return x.slice(-1)!=="/"&&(x+="/"),x},u=function(x,z){return z=z!==void 0?z:p.createFolders,x=d(x),this.files[x]||l.call(this,x,null,{dir:!0,createFolders:z}),this.files[x]};function v(x){return Object.prototype.toString.call(x)==="[object RegExp]"}var C={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(x){var z,k,V;for(z in this.files)V=this.files[z],(k=z.slice(this.root.length,z.length))&&z.slice(0,this.root.length)===this.root&&x(k,V)},filter:function(x){var z=[];return this.forEach(function(k,V){x(k,V)&&z.push(V)}),z},file:function(x,z,k){if(arguments.length!==1)return x=this.root+x,l.call(this,x,z,k),this;if(v(x)){var V=x;return this.filter(function(F,G){return!G.dir&&V.test(F)})}var O=this.files[this.root+x];return O&&!O.dir?O:null},folder:function(x){if(!x)return this;if(v(x))return this.filter(function(O,F){return F.dir&&x.test(O)});var z=this.root+x,k=u.call(this,z),V=this.clone();return V.root=k.name,V},remove:function(x){x=this.root+x;var z=this.files[x];if(z||(x.slice(-1)!=="/"&&(x+="/"),z=this.files[x]),z&&!z.dir)delete this.files[x];else for(var k=this.filter(function(O,F){return F.name.slice(0,x.length)===x}),V=0;V<k.length;V++)delete this.files[k[V].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(x){var z,k={};try{if((k=r.extend(x||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:a.utf8encode})).type=k.type.toLowerCase(),k.compression=k.compression.toUpperCase(),k.type==="binarystring"&&(k.type="string"),!k.type)throw new Error("No output type specified.");r.checkSupport(k.type),k.platform!=="darwin"&&k.platform!=="freebsd"&&k.platform!=="linux"&&k.platform!=="sunos"||(k.platform="UNIX"),k.platform==="win32"&&(k.platform="DOS");var V=k.comment||this.comment||"";z=i.generateWorker(this,k,V)}catch(O){(z=new s("error")).error(O)}return new h(z,k.type||"string",k.mimeType)},generateAsync:function(x,z){return this.generateInternalStream(x).accumulate(z)},generateNodeStream:function(x,z){return(x=x||{}).type||(x.type="nodebuffer"),this.generateInternalStream(x).toNodejsStream(z)}};N.exports=C},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(b,N,w){N.exports=b("stream")},{stream:void 0}],17:[function(b,N,w){var l=b("./DataReader");function a(r){l.call(this,r);for(var s=0;s<this.data.length;s++)r[s]=255&r[s]}b("../utils").inherits(a,l),a.prototype.byteAt=function(r){return this.data[this.zero+r]},a.prototype.lastIndexOfSignature=function(r){for(var s=r.charCodeAt(0),h=r.charCodeAt(1),p=r.charCodeAt(2),g=r.charCodeAt(3),o=this.length-4;0<=o;--o)if(this.data[o]===s&&this.data[o+1]===h&&this.data[o+2]===p&&this.data[o+3]===g)return o-this.zero;return-1},a.prototype.readAndCheckSignature=function(r){var s=r.charCodeAt(0),h=r.charCodeAt(1),p=r.charCodeAt(2),g=r.charCodeAt(3),o=this.readData(4);return s===o[0]&&h===o[1]&&p===o[2]&&g===o[3]},a.prototype.readData=function(r){if(this.checkOffset(r),r===0)return[];var s=this.data.slice(this.zero+this.index,this.zero+this.index+r);return this.index+=r,s},N.exports=a},{"../utils":32,"./DataReader":18}],18:[function(b,N,w){var l=b("../utils");function a(r){this.data=r,this.length=r.length,this.index=0,this.zero=0}a.prototype={checkOffset:function(r){this.checkIndex(this.index+r)},checkIndex:function(r){if(this.length<this.zero+r||r<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+r+"). Corrupted zip ?")},setIndex:function(r){this.checkIndex(r),this.index=r},skip:function(r){this.setIndex(this.index+r)},byteAt:function(){},readInt:function(r){var s,h=0;for(this.checkOffset(r),s=this.index+r-1;s>=this.index;s--)h=(h<<8)+this.byteAt(s);return this.index+=r,h},readString:function(r){return l.transformTo("string",this.readData(r))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var r=this.readInt(4);return new Date(Date.UTC(1980+(r>>25&127),(r>>21&15)-1,r>>16&31,r>>11&31,r>>5&63,(31&r)<<1))}},N.exports=a},{"../utils":32}],19:[function(b,N,w){var l=b("./Uint8ArrayReader");function a(r){l.call(this,r)}b("../utils").inherits(a,l),a.prototype.readData=function(r){this.checkOffset(r);var s=this.data.slice(this.zero+this.index,this.zero+this.index+r);return this.index+=r,s},N.exports=a},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(b,N,w){var l=b("./DataReader");function a(r){l.call(this,r)}b("../utils").inherits(a,l),a.prototype.byteAt=function(r){return this.data.charCodeAt(this.zero+r)},a.prototype.lastIndexOfSignature=function(r){return this.data.lastIndexOf(r)-this.zero},a.prototype.readAndCheckSignature=function(r){return r===this.readData(4)},a.prototype.readData=function(r){this.checkOffset(r);var s=this.data.slice(this.zero+this.index,this.zero+this.index+r);return this.index+=r,s},N.exports=a},{"../utils":32,"./DataReader":18}],21:[function(b,N,w){var l=b("./ArrayReader");function a(r){l.call(this,r)}b("../utils").inherits(a,l),a.prototype.readData=function(r){if(this.checkOffset(r),r===0)return new Uint8Array(0);var s=this.data.subarray(this.zero+this.index,this.zero+this.index+r);return this.index+=r,s},N.exports=a},{"../utils":32,"./ArrayReader":17}],22:[function(b,N,w){var l=b("../utils"),a=b("../support"),r=b("./ArrayReader"),s=b("./StringReader"),h=b("./NodeBufferReader"),p=b("./Uint8ArrayReader");N.exports=function(g){var o=l.getTypeOf(g);return l.checkSupport(o),o!=="string"||a.uint8array?o==="nodebuffer"?new h(g):a.uint8array?new p(l.transformTo("uint8array",g)):new r(l.transformTo("array",g)):new s(g)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(b,N,w){w.LOCAL_FILE_HEADER="PK",w.CENTRAL_FILE_HEADER="PK",w.CENTRAL_DIRECTORY_END="PK",w.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",w.ZIP64_CENTRAL_DIRECTORY_END="PK",w.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(b,N,w){var l=b("./GenericWorker"),a=b("../utils");function r(s){l.call(this,"ConvertWorker to "+s),this.destType=s}a.inherits(r,l),r.prototype.processChunk=function(s){this.push({data:a.transformTo(this.destType,s.data),meta:s.meta})},N.exports=r},{"../utils":32,"./GenericWorker":28}],25:[function(b,N,w){var l=b("./GenericWorker"),a=b("../crc32");function r(){l.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}b("../utils").inherits(r,l),r.prototype.processChunk=function(s){this.streamInfo.crc32=a(s.data,this.streamInfo.crc32||0),this.push(s)},N.exports=r},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(b,N,w){var l=b("../utils"),a=b("./GenericWorker");function r(s){a.call(this,"DataLengthProbe for "+s),this.propName=s,this.withStreamInfo(s,0)}l.inherits(r,a),r.prototype.processChunk=function(s){if(s){var h=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=h+s.data.length}a.prototype.processChunk.call(this,s)},N.exports=r},{"../utils":32,"./GenericWorker":28}],27:[function(b,N,w){var l=b("../utils"),a=b("./GenericWorker");function r(s){a.call(this,"DataWorker");var h=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,s.then(function(p){h.dataIsReady=!0,h.data=p,h.max=p&&p.length||0,h.type=l.getTypeOf(p),h.isPaused||h._tickAndRepeat()},function(p){h.error(p)})}l.inherits(r,a),r.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this.data=null},r.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,l.delay(this._tickAndRepeat,[],this)),!0)},r.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(l.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},r.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var s=null,h=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":s=this.data.substring(this.index,h);break;case"uint8array":s=this.data.subarray(this.index,h);break;case"array":case"nodebuffer":s=this.data.slice(this.index,h)}return this.index=h,this.push({data:s,meta:{percent:this.max?this.index/this.max*100:0}})},N.exports=r},{"../utils":32,"./GenericWorker":28}],28:[function(b,N,w){function l(a){this.name=a||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}l.prototype={push:function(a){this.emit("data",a)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(a){this.emit("error",a)}return!0},error:function(a){return!this.isFinished&&(this.isPaused?this.generatedError=a:(this.isFinished=!0,this.emit("error",a),this.previous&&this.previous.error(a),this.cleanUp()),!0)},on:function(a,r){return this._listeners[a].push(r),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(a,r){if(this._listeners[a])for(var s=0;s<this._listeners[a].length;s++)this._listeners[a][s].call(this,r)},pipe:function(a){return a.registerPrevious(this)},registerPrevious:function(a){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=a.streamInfo,this.mergeStreamInfo(),this.previous=a;var r=this;return a.on("data",function(s){r.processChunk(s)}),a.on("end",function(){r.end()}),a.on("error",function(s){r.error(s)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var a=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),a=!0),this.previous&&this.previous.resume(),!a},flush:function(){},processChunk:function(a){this.push(a)},withStreamInfo:function(a,r){return this.extraStreamInfo[a]=r,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var a in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,a)&&(this.streamInfo[a]=this.extraStreamInfo[a])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var a="Worker "+this.name;return this.previous?this.previous+" -> "+a:a}},N.exports=l},{}],29:[function(b,N,w){var l=b("../utils"),a=b("./ConvertWorker"),r=b("./GenericWorker"),s=b("../base64"),h=b("../support"),p=b("../external"),g=null;if(h.nodestream)try{g=b("../nodejs/NodejsStreamOutputAdapter")}catch(c){}function o(c,n){return new p.Promise(function(m,d){var u=[],v=c._internalType,C=c._outputType,x=c._mimeType;c.on("data",function(z,k){u.push(z),n&&n(k)}).on("error",function(z){u=[],d(z)}).on("end",function(){try{var z=function(k,V,O){switch(k){case"blob":return l.newBlob(l.transformTo("arraybuffer",V),O);case"base64":return s.encode(V);default:return l.transformTo(k,V)}}(C,function(k,V){var O,F=0,G=null,y=0;for(O=0;O<V.length;O++)y+=V[O].length;switch(k){case"string":return V.join("");case"array":return Array.prototype.concat.apply([],V);case"uint8array":for(G=new Uint8Array(y),O=0;O<V.length;O++)G.set(V[O],F),F+=V[O].length;return G;case"nodebuffer":return Buffer.concat(V);default:throw new Error("concat : unsupported type '"+k+"'")}}(v,u),x);m(z)}catch(k){d(k)}u=[]}).resume()})}function i(c,n,m){var d=n;switch(n){case"blob":case"arraybuffer":d="uint8array";break;case"base64":d="string"}try{this._internalType=d,this._outputType=n,this._mimeType=m,l.checkSupport(d),this._worker=c.pipe(new a(d)),c.lock()}catch(u){this._worker=new r("error"),this._worker.error(u)}}i.prototype={accumulate:function(c){return o(this,c)},on:function(c,n){var m=this;return c==="data"?this._worker.on(c,function(d){n.call(m,d.data,d.meta)}):this._worker.on(c,function(){l.delay(n,arguments,m)}),this},resume:function(){return l.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(c){if(l.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new g(this,{objectMode:this._outputType!=="nodebuffer"},c)}},N.exports=i},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(b,N,w){if(w.base64=!0,w.array=!0,w.string=!0,w.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",w.nodebuffer=typeof Buffer<"u",w.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")w.blob=!1;else{var l=new ArrayBuffer(0);try{w.blob=new Blob([l],{type:"application/zip"}).size===0}catch(r){try{var a=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);a.append(l),w.blob=a.getBlob("application/zip").size===0}catch(s){w.blob=!1}}}try{w.nodestream=!!b("readable-stream").Readable}catch(r){w.nodestream=!1}},{"readable-stream":16}],31:[function(b,N,w){for(var l=b("./utils"),a=b("./support"),r=b("./nodejsUtils"),s=b("./stream/GenericWorker"),h=new Array(256),p=0;p<256;p++)h[p]=252<=p?6:248<=p?5:240<=p?4:224<=p?3:192<=p?2:1;h[254]=h[254]=1;function g(){s.call(this,"utf-8 decode"),this.leftOver=null}function o(){s.call(this,"utf-8 encode")}w.utf8encode=function(i){return a.nodebuffer?r.newBufferFrom(i,"utf-8"):function(c){var n,m,d,u,v,C=c.length,x=0;for(u=0;u<C;u++)(64512&(m=c.charCodeAt(u)))==55296&&u+1<C&&(64512&(d=c.charCodeAt(u+1)))==56320&&(m=65536+(m-55296<<10)+(d-56320),u++),x+=m<128?1:m<2048?2:m<65536?3:4;for(n=a.uint8array?new Uint8Array(x):new Array(x),u=v=0;v<x;u++)(64512&(m=c.charCodeAt(u)))==55296&&u+1<C&&(64512&(d=c.charCodeAt(u+1)))==56320&&(m=65536+(m-55296<<10)+(d-56320),u++),m<128?n[v++]=m:(m<2048?n[v++]=192|m>>>6:(m<65536?n[v++]=224|m>>>12:(n[v++]=240|m>>>18,n[v++]=128|m>>>12&63),n[v++]=128|m>>>6&63),n[v++]=128|63&m);return n}(i)},w.utf8decode=function(i){return a.nodebuffer?l.transformTo("nodebuffer",i).toString("utf-8"):function(c){var n,m,d,u,v=c.length,C=new Array(2*v);for(n=m=0;n<v;)if((d=c[n++])<128)C[m++]=d;else if(4<(u=h[d]))C[m++]=65533,n+=u-1;else{for(d&=u===2?31:u===3?15:7;1<u&&n<v;)d=d<<6|63&c[n++],u--;1<u?C[m++]=65533:d<65536?C[m++]=d:(d-=65536,C[m++]=55296|d>>10&1023,C[m++]=56320|1023&d)}return C.length!==m&&(C.subarray?C=C.subarray(0,m):C.length=m),l.applyFromCharCode(C)}(i=l.transformTo(a.uint8array?"uint8array":"array",i))},l.inherits(g,s),g.prototype.processChunk=function(i){var c=l.transformTo(a.uint8array?"uint8array":"array",i.data);if(this.leftOver&&this.leftOver.length){if(a.uint8array){var n=c;(c=new Uint8Array(n.length+this.leftOver.length)).set(this.leftOver,0),c.set(n,this.leftOver.length)}else c=this.leftOver.concat(c);this.leftOver=null}var m=function(u,v){var C;for((v=v||u.length)>u.length&&(v=u.length),C=v-1;0<=C&&(192&u[C])==128;)C--;return C<0||C===0?v:C+h[u[C]]>v?C:v}(c),d=c;m!==c.length&&(a.uint8array?(d=c.subarray(0,m),this.leftOver=c.subarray(m,c.length)):(d=c.slice(0,m),this.leftOver=c.slice(m,c.length))),this.push({data:w.utf8decode(d),meta:i.meta})},g.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:w.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},w.Utf8DecodeWorker=g,l.inherits(o,s),o.prototype.processChunk=function(i){this.push({data:w.utf8encode(i.data),meta:i.meta})},w.Utf8EncodeWorker=o},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(b,N,w){var l=b("./support"),a=b("./base64"),r=b("./nodejsUtils"),s=b("./external");function h(n){return n}function p(n,m){for(var d=0;d<n.length;++d)m[d]=255&n.charCodeAt(d);return m}b("setimmediate"),w.newBlob=function(n,m){w.checkSupport("blob");try{return new Blob([n],{type:m})}catch(u){try{var d=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return d.append(n),d.getBlob(m)}catch(v){throw new Error("Bug : can't construct the Blob.")}}};var g={stringifyByChunk:function(n,m,d){var u=[],v=0,C=n.length;if(C<=d)return String.fromCharCode.apply(null,n);for(;v<C;)m==="array"||m==="nodebuffer"?u.push(String.fromCharCode.apply(null,n.slice(v,Math.min(v+d,C)))):u.push(String.fromCharCode.apply(null,n.subarray(v,Math.min(v+d,C)))),v+=d;return u.join("")},stringifyByChar:function(n){for(var m="",d=0;d<n.length;d++)m+=String.fromCharCode(n[d]);return m},applyCanBeUsed:{uint8array:function(){try{return l.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch(n){return!1}}(),nodebuffer:function(){try{return l.nodebuffer&&String.fromCharCode.apply(null,r.allocBuffer(1)).length===1}catch(n){return!1}}()}};function o(n){var m=65536,d=w.getTypeOf(n),u=!0;if(d==="uint8array"?u=g.applyCanBeUsed.uint8array:d==="nodebuffer"&&(u=g.applyCanBeUsed.nodebuffer),u)for(;1<m;)try{return g.stringifyByChunk(n,d,m)}catch(v){m=Math.floor(m/2)}return g.stringifyByChar(n)}function i(n,m){for(var d=0;d<n.length;d++)m[d]=n[d];return m}w.applyFromCharCode=o;var c={};c.string={string:h,array:function(n){return p(n,new Array(n.length))},arraybuffer:function(n){return c.string.uint8array(n).buffer},uint8array:function(n){return p(n,new Uint8Array(n.length))},nodebuffer:function(n){return p(n,r.allocBuffer(n.length))}},c.array={string:o,array:h,arraybuffer:function(n){return new Uint8Array(n).buffer},uint8array:function(n){return new Uint8Array(n)},nodebuffer:function(n){return r.newBufferFrom(n)}},c.arraybuffer={string:function(n){return o(new Uint8Array(n))},array:function(n){return i(new Uint8Array(n),new Array(n.byteLength))},arraybuffer:h,uint8array:function(n){return new Uint8Array(n)},nodebuffer:function(n){return r.newBufferFrom(new Uint8Array(n))}},c.uint8array={string:o,array:function(n){return i(n,new Array(n.length))},arraybuffer:function(n){return n.buffer},uint8array:h,nodebuffer:function(n){return r.newBufferFrom(n)}},c.nodebuffer={string:o,array:function(n){return i(n,new Array(n.length))},arraybuffer:function(n){return c.nodebuffer.uint8array(n).buffer},uint8array:function(n){return i(n,new Uint8Array(n.length))},nodebuffer:h},w.transformTo=function(n,m){if(m=m||"",!n)return m;w.checkSupport(n);var d=w.getTypeOf(m);return c[d][n](m)},w.resolve=function(n){for(var m=n.split("/"),d=[],u=0;u<m.length;u++){var v=m[u];v==="."||v===""&&u!==0&&u!==m.length-1||(v===".."?d.pop():d.push(v))}return d.join("/")},w.getTypeOf=function(n){return typeof n=="string"?"string":Object.prototype.toString.call(n)==="[object Array]"?"array":l.nodebuffer&&r.isBuffer(n)?"nodebuffer":l.uint8array&&n instanceof Uint8Array?"uint8array":l.arraybuffer&&n instanceof ArrayBuffer?"arraybuffer":void 0},w.checkSupport=function(n){if(!l[n.toLowerCase()])throw new Error(n+" is not supported by this platform")},w.MAX_VALUE_16BITS=65535,w.MAX_VALUE_32BITS=-1,w.pretty=function(n){var m,d,u="";for(d=0;d<(n||"").length;d++)u+="\\x"+((m=n.charCodeAt(d))<16?"0":"")+m.toString(16).toUpperCase();return u},w.delay=function(n,m,d){setImmediate(function(){n.apply(d||null,m||[])})},w.inherits=function(n,m){function d(){}d.prototype=m.prototype,n.prototype=new d},w.extend=function(){var n,m,d={};for(n=0;n<arguments.length;n++)for(m in arguments[n])Object.prototype.hasOwnProperty.call(arguments[n],m)&&d[m]===void 0&&(d[m]=arguments[n][m]);return d},w.prepareContent=function(n,m,d,u,v){return s.Promise.resolve(m).then(function(C){return l.blob&&(C instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(C))!==-1)&&typeof FileReader<"u"?new s.Promise(function(x,z){var k=new FileReader;k.onload=function(V){x(V.target.result)},k.onerror=function(V){z(V.target.error)},k.readAsArrayBuffer(C)}):C}).then(function(C){var x=w.getTypeOf(C);return x?(x==="arraybuffer"?C=w.transformTo("uint8array",C):x==="string"&&(v?C=a.decode(C):d&&u!==!0&&(C=function(z){return p(z,l.uint8array?new Uint8Array(z.length):new Array(z.length))}(C))),C):s.Promise.reject(new Error("Can't read the data of '"+n+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(b,N,w){var l=b("./reader/readerFor"),a=b("./utils"),r=b("./signature"),s=b("./zipEntry"),h=b("./support");function p(g){this.files=[],this.loadOptions=g}p.prototype={checkSignature:function(g){if(!this.reader.readAndCheckSignature(g)){this.reader.index-=4;var o=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+a.pretty(o)+", expected "+a.pretty(g)+")")}},isSignature:function(g,o){var i=this.reader.index;this.reader.setIndex(g);var c=this.reader.readString(4)===o;return this.reader.setIndex(i),c},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var g=this.reader.readData(this.zipCommentLength),o=h.uint8array?"uint8array":"array",i=a.transformTo(o,g);this.zipComment=this.loadOptions.decodeFileName(i)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var g,o,i,c=this.zip64EndOfCentralSize-44;0<c;)g=this.reader.readInt(2),o=this.reader.readInt(4),i=this.reader.readData(o),this.zip64ExtensibleData[g]={id:g,length:o,value:i}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var g,o;for(g=0;g<this.files.length;g++)o=this.files[g],this.reader.setIndex(o.localHeaderOffset),this.checkSignature(r.LOCAL_FILE_HEADER),o.readLocalPart(this.reader),o.handleUTF8(),o.processAttributes()},readCentralDir:function(){var g;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(r.CENTRAL_FILE_HEADER);)(g=new s({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(g);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var g=this.reader.lastIndexOfSignature(r.CENTRAL_DIRECTORY_END);if(g<0)throw this.isSignature(0,r.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(g);var o=g;if(this.checkSignature(r.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===a.MAX_VALUE_16BITS||this.diskWithCentralDirStart===a.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===a.MAX_VALUE_16BITS||this.centralDirRecords===a.MAX_VALUE_16BITS||this.centralDirSize===a.MAX_VALUE_32BITS||this.centralDirOffset===a.MAX_VALUE_32BITS){if(this.zip64=!0,(g=this.reader.lastIndexOfSignature(r.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(g),this.checkSignature(r.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,r.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(r.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(r.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var i=this.centralDirOffset+this.centralDirSize;this.zip64&&(i+=20,i+=12+this.zip64EndOfCentralSize);var c=o-i;if(0<c)this.isSignature(o,r.CENTRAL_FILE_HEADER)||(this.reader.zero=c);else if(c<0)throw new Error("Corrupted zip: missing "+Math.abs(c)+" bytes.")},prepareReader:function(g){this.reader=l(g)},load:function(g){this.prepareReader(g),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},N.exports=p},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(b,N,w){var l=b("./reader/readerFor"),a=b("./utils"),r=b("./compressedObject"),s=b("./crc32"),h=b("./utf8"),p=b("./compressions"),g=b("./support");function o(i,c){this.options=i,this.loadOptions=c}o.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(i){var c,n;if(i.skip(22),this.fileNameLength=i.readInt(2),n=i.readInt(2),this.fileName=i.readData(this.fileNameLength),i.skip(n),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((c=function(m){for(var d in p)if(Object.prototype.hasOwnProperty.call(p,d)&&p[d].magic===m)return p[d];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+a.pretty(this.compressionMethod)+" unknown (inner file : "+a.transformTo("string",this.fileName)+")");this.decompressed=new r(this.compressedSize,this.uncompressedSize,this.crc32,c,i.readData(this.compressedSize))},readCentralPart:function(i){this.versionMadeBy=i.readInt(2),i.skip(2),this.bitFlag=i.readInt(2),this.compressionMethod=i.readString(2),this.date=i.readDate(),this.crc32=i.readInt(4),this.compressedSize=i.readInt(4),this.uncompressedSize=i.readInt(4);var c=i.readInt(2);if(this.extraFieldsLength=i.readInt(2),this.fileCommentLength=i.readInt(2),this.diskNumberStart=i.readInt(2),this.internalFileAttributes=i.readInt(2),this.externalFileAttributes=i.readInt(4),this.localHeaderOffset=i.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");i.skip(c),this.readExtraFields(i),this.parseZIP64ExtraField(i),this.fileComment=i.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var i=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),i==0&&(this.dosPermissions=63&this.externalFileAttributes),i==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var i=l(this.extraFields[1].value);this.uncompressedSize===a.MAX_VALUE_32BITS&&(this.uncompressedSize=i.readInt(8)),this.compressedSize===a.MAX_VALUE_32BITS&&(this.compressedSize=i.readInt(8)),this.localHeaderOffset===a.MAX_VALUE_32BITS&&(this.localHeaderOffset=i.readInt(8)),this.diskNumberStart===a.MAX_VALUE_32BITS&&(this.diskNumberStart=i.readInt(4))}},readExtraFields:function(i){var c,n,m,d=i.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});i.index+4<d;)c=i.readInt(2),n=i.readInt(2),m=i.readData(n),this.extraFields[c]={id:c,length:n,value:m};i.setIndex(d)},handleUTF8:function(){var i=g.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=h.utf8decode(this.fileName),this.fileCommentStr=h.utf8decode(this.fileComment);else{var c=this.findExtraFieldUnicodePath();if(c!==null)this.fileNameStr=c;else{var n=a.transformTo(i,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(n)}var m=this.findExtraFieldUnicodeComment();if(m!==null)this.fileCommentStr=m;else{var d=a.transformTo(i,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(d)}}},findExtraFieldUnicodePath:function(){var i=this.extraFields[28789];if(i){var c=l(i.value);return c.readInt(1)!==1||s(this.fileName)!==c.readInt(4)?null:h.utf8decode(c.readData(i.length-5))}return null},findExtraFieldUnicodeComment:function(){var i=this.extraFields[25461];if(i){var c=l(i.value);return c.readInt(1)!==1||s(this.fileComment)!==c.readInt(4)?null:h.utf8decode(c.readData(i.length-5))}return null}},N.exports=o},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(b,N,w){function l(c,n,m){this.name=c,this.dir=m.dir,this.date=m.date,this.comment=m.comment,this.unixPermissions=m.unixPermissions,this.dosPermissions=m.dosPermissions,this._data=n,this._dataBinary=m.binary,this.options={compression:m.compression,compressionOptions:m.compressionOptions}}var a=b("./stream/StreamHelper"),r=b("./stream/DataWorker"),s=b("./utf8"),h=b("./compressedObject"),p=b("./stream/GenericWorker");l.prototype={internalStream:function(c){var n=null,m="string";try{if(!c)throw new Error("No output type specified.");var d=(m=c.toLowerCase())==="string"||m==="text";m!=="binarystring"&&m!=="text"||(m="string"),n=this._decompressWorker();var u=!this._dataBinary;u&&!d&&(n=n.pipe(new s.Utf8EncodeWorker)),!u&&d&&(n=n.pipe(new s.Utf8DecodeWorker))}catch(v){(n=new p("error")).error(v)}return new a(n,m,"")},async:function(c,n){return this.internalStream(c).accumulate(n)},nodeStream:function(c,n){return this.internalStream(c||"nodebuffer").toNodejsStream(n)},_compressWorker:function(c,n){if(this._data instanceof h&&this._data.compression.magic===c.magic)return this._data.getCompressedWorker();var m=this._decompressWorker();return this._dataBinary||(m=m.pipe(new s.Utf8EncodeWorker)),h.createWorkerFrom(m,c,n)},_decompressWorker:function(){return this._data instanceof h?this._data.getContentWorker():this._data instanceof p?this._data:new r(this._data)}};for(var g=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],o=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},i=0;i<g.length;i++)l.prototype[g[i]]=o;N.exports=l},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(b,N,w){(function(l){var a,r,s=l.MutationObserver||l.WebKitMutationObserver;if(s){var h=0,p=new s(c),g=l.document.createTextNode("");p.observe(g,{characterData:!0}),a=function(){g.data=h=++h%2}}else if(l.setImmediate||l.MessageChannel===void 0)a="document"in l&&"onreadystatechange"in l.document.createElement("script")?function(){var n=l.document.createElement("script");n.onreadystatechange=function(){c(),n.onreadystatechange=null,n.parentNode.removeChild(n),n=null},l.document.documentElement.appendChild(n)}:function(){setTimeout(c,0)};else{var o=new l.MessageChannel;o.port1.onmessage=c,a=function(){o.port2.postMessage(0)}}var i=[];function c(){var n,m;r=!0;for(var d=i.length;d;){for(m=i,i=[],n=-1;++n<d;)m[n]();d=i.length}r=!1}N.exports=function(n){i.push(n)!==1||r||a()}}).call(this,typeof We<"u"?We:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(b,N,w){var l=b("immediate");function a(){}var r={},s=["REJECTED"],h=["FULFILLED"],p=["PENDING"];function g(d){if(typeof d!="function")throw new TypeError("resolver must be a function");this.state=p,this.queue=[],this.outcome=void 0,d!==a&&n(this,d)}function o(d,u,v){this.promise=d,typeof u=="function"&&(this.onFulfilled=u,this.callFulfilled=this.otherCallFulfilled),typeof v=="function"&&(this.onRejected=v,this.callRejected=this.otherCallRejected)}function i(d,u,v){l(function(){var C;try{C=u(v)}catch(x){return r.reject(d,x)}C===d?r.reject(d,new TypeError("Cannot resolve promise with itself")):r.resolve(d,C)})}function c(d){var u=d&&d.then;if(d&&(typeof d=="object"||typeof d=="function")&&typeof u=="function")return function(){u.apply(d,arguments)}}function n(d,u){var v=!1;function C(k){v||(v=!0,r.reject(d,k))}function x(k){v||(v=!0,r.resolve(d,k))}var z=m(function(){u(x,C)});z.status==="error"&&C(z.value)}function m(d,u){var v={};try{v.value=d(u),v.status="success"}catch(C){v.status="error",v.value=C}return v}(N.exports=g).prototype.finally=function(d){if(typeof d!="function")return this;var u=this.constructor;return this.then(function(v){return u.resolve(d()).then(function(){return v})},function(v){return u.resolve(d()).then(function(){throw v})})},g.prototype.catch=function(d){return this.then(null,d)},g.prototype.then=function(d,u){if(typeof d!="function"&&this.state===h||typeof u!="function"&&this.state===s)return this;var v=new this.constructor(a);return this.state!==p?i(v,this.state===h?d:u,this.outcome):this.queue.push(new o(v,d,u)),v},o.prototype.callFulfilled=function(d){r.resolve(this.promise,d)},o.prototype.otherCallFulfilled=function(d){i(this.promise,this.onFulfilled,d)},o.prototype.callRejected=function(d){r.reject(this.promise,d)},o.prototype.otherCallRejected=function(d){i(this.promise,this.onRejected,d)},r.resolve=function(d,u){var v=m(c,u);if(v.status==="error")return r.reject(d,v.value);var C=v.value;if(C)n(d,C);else{d.state=h,d.outcome=u;for(var x=-1,z=d.queue.length;++x<z;)d.queue[x].callFulfilled(u)}return d},r.reject=function(d,u){d.state=s,d.outcome=u;for(var v=-1,C=d.queue.length;++v<C;)d.queue[v].callRejected(u);return d},g.resolve=function(d){return d instanceof this?d:r.resolve(new this(a),d)},g.reject=function(d){var u=new this(a);return r.reject(u,d)},g.all=function(d){var u=this;if(Object.prototype.toString.call(d)!=="[object Array]")return this.reject(new TypeError("must be an array"));var v=d.length,C=!1;if(!v)return this.resolve([]);for(var x=new Array(v),z=0,k=-1,V=new this(a);++k<v;)O(d[k],k);return V;function O(F,G){u.resolve(F).then(function(y){x[G]=y,++z!==v||C||(C=!0,r.resolve(V,x))},function(y){C||(C=!0,r.reject(V,y))})}},g.race=function(d){var u=this;if(Object.prototype.toString.call(d)!=="[object Array]")return this.reject(new TypeError("must be an array"));var v=d.length,C=!1;if(!v)return this.resolve([]);for(var x=-1,z=new this(a);++x<v;)k=d[x],u.resolve(k).then(function(V){C||(C=!0,r.resolve(z,V))},function(V){C||(C=!0,r.reject(z,V))});var k;return z}},{immediate:36}],38:[function(b,N,w){var l={};(0,b("./lib/utils/common").assign)(l,b("./lib/deflate"),b("./lib/inflate"),b("./lib/zlib/constants")),N.exports=l},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(b,N,w){var l=b("./zlib/deflate"),a=b("./utils/common"),r=b("./utils/strings"),s=b("./zlib/messages"),h=b("./zlib/zstream"),p=Object.prototype.toString,g=0,o=-1,i=0,c=8;function n(d){if(!(this instanceof n))return new n(d);this.options=a.assign({level:o,method:c,chunkSize:16384,windowBits:15,memLevel:8,strategy:i,to:""},d||{});var u=this.options;u.raw&&0<u.windowBits?u.windowBits=-u.windowBits:u.gzip&&0<u.windowBits&&u.windowBits<16&&(u.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new h,this.strm.avail_out=0;var v=l.deflateInit2(this.strm,u.level,u.method,u.windowBits,u.memLevel,u.strategy);if(v!==g)throw new Error(s[v]);if(u.header&&l.deflateSetHeader(this.strm,u.header),u.dictionary){var C;if(C=typeof u.dictionary=="string"?r.string2buf(u.dictionary):p.call(u.dictionary)==="[object ArrayBuffer]"?new Uint8Array(u.dictionary):u.dictionary,(v=l.deflateSetDictionary(this.strm,C))!==g)throw new Error(s[v]);this._dict_set=!0}}function m(d,u){var v=new n(u);if(v.push(d,!0),v.err)throw v.msg||s[v.err];return v.result}n.prototype.push=function(d,u){var v,C,x=this.strm,z=this.options.chunkSize;if(this.ended)return!1;C=u===~~u?u:u===!0?4:0,typeof d=="string"?x.input=r.string2buf(d):p.call(d)==="[object ArrayBuffer]"?x.input=new Uint8Array(d):x.input=d,x.next_in=0,x.avail_in=x.input.length;do{if(x.avail_out===0&&(x.output=new a.Buf8(z),x.next_out=0,x.avail_out=z),(v=l.deflate(x,C))!==1&&v!==g)return this.onEnd(v),!(this.ended=!0);x.avail_out!==0&&(x.avail_in!==0||C!==4&&C!==2)||(this.options.to==="string"?this.onData(r.buf2binstring(a.shrinkBuf(x.output,x.next_out))):this.onData(a.shrinkBuf(x.output,x.next_out)))}while((0<x.avail_in||x.avail_out===0)&&v!==1);return C===4?(v=l.deflateEnd(this.strm),this.onEnd(v),this.ended=!0,v===g):C!==2||(this.onEnd(g),!(x.avail_out=0))},n.prototype.onData=function(d){this.chunks.push(d)},n.prototype.onEnd=function(d){d===g&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=d,this.msg=this.strm.msg},w.Deflate=n,w.deflate=m,w.deflateRaw=function(d,u){return(u=u||{}).raw=!0,m(d,u)},w.gzip=function(d,u){return(u=u||{}).gzip=!0,m(d,u)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(b,N,w){var l=b("./zlib/inflate"),a=b("./utils/common"),r=b("./utils/strings"),s=b("./zlib/constants"),h=b("./zlib/messages"),p=b("./zlib/zstream"),g=b("./zlib/gzheader"),o=Object.prototype.toString;function i(n){if(!(this instanceof i))return new i(n);this.options=a.assign({chunkSize:16384,windowBits:0,to:""},n||{});var m=this.options;m.raw&&0<=m.windowBits&&m.windowBits<16&&(m.windowBits=-m.windowBits,m.windowBits===0&&(m.windowBits=-15)),!(0<=m.windowBits&&m.windowBits<16)||n&&n.windowBits||(m.windowBits+=32),15<m.windowBits&&m.windowBits<48&&!(15&m.windowBits)&&(m.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new p,this.strm.avail_out=0;var d=l.inflateInit2(this.strm,m.windowBits);if(d!==s.Z_OK)throw new Error(h[d]);this.header=new g,l.inflateGetHeader(this.strm,this.header)}function c(n,m){var d=new i(m);if(d.push(n,!0),d.err)throw d.msg||h[d.err];return d.result}i.prototype.push=function(n,m){var d,u,v,C,x,z,k=this.strm,V=this.options.chunkSize,O=this.options.dictionary,F=!1;if(this.ended)return!1;u=m===~~m?m:m===!0?s.Z_FINISH:s.Z_NO_FLUSH,typeof n=="string"?k.input=r.binstring2buf(n):o.call(n)==="[object ArrayBuffer]"?k.input=new Uint8Array(n):k.input=n,k.next_in=0,k.avail_in=k.input.length;do{if(k.avail_out===0&&(k.output=new a.Buf8(V),k.next_out=0,k.avail_out=V),(d=l.inflate(k,s.Z_NO_FLUSH))===s.Z_NEED_DICT&&O&&(z=typeof O=="string"?r.string2buf(O):o.call(O)==="[object ArrayBuffer]"?new Uint8Array(O):O,d=l.inflateSetDictionary(this.strm,z)),d===s.Z_BUF_ERROR&&F===!0&&(d=s.Z_OK,F=!1),d!==s.Z_STREAM_END&&d!==s.Z_OK)return this.onEnd(d),!(this.ended=!0);k.next_out&&(k.avail_out!==0&&d!==s.Z_STREAM_END&&(k.avail_in!==0||u!==s.Z_FINISH&&u!==s.Z_SYNC_FLUSH)||(this.options.to==="string"?(v=r.utf8border(k.output,k.next_out),C=k.next_out-v,x=r.buf2string(k.output,v),k.next_out=C,k.avail_out=V-C,C&&a.arraySet(k.output,k.output,v,C,0),this.onData(x)):this.onData(a.shrinkBuf(k.output,k.next_out)))),k.avail_in===0&&k.avail_out===0&&(F=!0)}while((0<k.avail_in||k.avail_out===0)&&d!==s.Z_STREAM_END);return d===s.Z_STREAM_END&&(u=s.Z_FINISH),u===s.Z_FINISH?(d=l.inflateEnd(this.strm),this.onEnd(d),this.ended=!0,d===s.Z_OK):u!==s.Z_SYNC_FLUSH||(this.onEnd(s.Z_OK),!(k.avail_out=0))},i.prototype.onData=function(n){this.chunks.push(n)},i.prototype.onEnd=function(n){n===s.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=n,this.msg=this.strm.msg},w.Inflate=i,w.inflate=c,w.inflateRaw=function(n,m){return(m=m||{}).raw=!0,c(n,m)},w.ungzip=c},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(b,N,w){var l=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";w.assign=function(s){for(var h=Array.prototype.slice.call(arguments,1);h.length;){var p=h.shift();if(p){if(typeof p!="object")throw new TypeError(p+"must be non-object");for(var g in p)p.hasOwnProperty(g)&&(s[g]=p[g])}}return s},w.shrinkBuf=function(s,h){return s.length===h?s:s.subarray?s.subarray(0,h):(s.length=h,s)};var a={arraySet:function(s,h,p,g,o){if(h.subarray&&s.subarray)s.set(h.subarray(p,p+g),o);else for(var i=0;i<g;i++)s[o+i]=h[p+i]},flattenChunks:function(s){var h,p,g,o,i,c;for(h=g=0,p=s.length;h<p;h++)g+=s[h].length;for(c=new Uint8Array(g),h=o=0,p=s.length;h<p;h++)i=s[h],c.set(i,o),o+=i.length;return c}},r={arraySet:function(s,h,p,g,o){for(var i=0;i<g;i++)s[o+i]=h[p+i]},flattenChunks:function(s){return[].concat.apply([],s)}};w.setTyped=function(s){s?(w.Buf8=Uint8Array,w.Buf16=Uint16Array,w.Buf32=Int32Array,w.assign(w,a)):(w.Buf8=Array,w.Buf16=Array,w.Buf32=Array,w.assign(w,r))},w.setTyped(l)},{}],42:[function(b,N,w){var l=b("./common"),a=!0,r=!0;try{String.fromCharCode.apply(null,[0])}catch(g){a=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(g){r=!1}for(var s=new l.Buf8(256),h=0;h<256;h++)s[h]=252<=h?6:248<=h?5:240<=h?4:224<=h?3:192<=h?2:1;function p(g,o){if(o<65537&&(g.subarray&&r||!g.subarray&&a))return String.fromCharCode.apply(null,l.shrinkBuf(g,o));for(var i="",c=0;c<o;c++)i+=String.fromCharCode(g[c]);return i}s[254]=s[254]=1,w.string2buf=function(g){var o,i,c,n,m,d=g.length,u=0;for(n=0;n<d;n++)(64512&(i=g.charCodeAt(n)))==55296&&n+1<d&&(64512&(c=g.charCodeAt(n+1)))==56320&&(i=65536+(i-55296<<10)+(c-56320),n++),u+=i<128?1:i<2048?2:i<65536?3:4;for(o=new l.Buf8(u),n=m=0;m<u;n++)(64512&(i=g.charCodeAt(n)))==55296&&n+1<d&&(64512&(c=g.charCodeAt(n+1)))==56320&&(i=65536+(i-55296<<10)+(c-56320),n++),i<128?o[m++]=i:(i<2048?o[m++]=192|i>>>6:(i<65536?o[m++]=224|i>>>12:(o[m++]=240|i>>>18,o[m++]=128|i>>>12&63),o[m++]=128|i>>>6&63),o[m++]=128|63&i);return o},w.buf2binstring=function(g){return p(g,g.length)},w.binstring2buf=function(g){for(var o=new l.Buf8(g.length),i=0,c=o.length;i<c;i++)o[i]=g.charCodeAt(i);return o},w.buf2string=function(g,o){var i,c,n,m,d=o||g.length,u=new Array(2*d);for(i=c=0;i<d;)if((n=g[i++])<128)u[c++]=n;else if(4<(m=s[n]))u[c++]=65533,i+=m-1;else{for(n&=m===2?31:m===3?15:7;1<m&&i<d;)n=n<<6|63&g[i++],m--;1<m?u[c++]=65533:n<65536?u[c++]=n:(n-=65536,u[c++]=55296|n>>10&1023,u[c++]=56320|1023&n)}return p(u,c)},w.utf8border=function(g,o){var i;for((o=o||g.length)>g.length&&(o=g.length),i=o-1;0<=i&&(192&g[i])==128;)i--;return i<0||i===0?o:i+s[g[i]]>o?i:o}},{"./common":41}],43:[function(b,N,w){N.exports=function(l,a,r,s){for(var h=65535&l|0,p=l>>>16&65535|0,g=0;r!==0;){for(r-=g=2e3<r?2e3:r;p=p+(h=h+a[s++]|0)|0,--g;);h%=65521,p%=65521}return h|p<<16|0}},{}],44:[function(b,N,w){N.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(b,N,w){var l=function(){for(var a,r=[],s=0;s<256;s++){a=s;for(var h=0;h<8;h++)a=1&a?3988292384^a>>>1:a>>>1;r[s]=a}return r}();N.exports=function(a,r,s,h){var p=l,g=h+s;a^=-1;for(var o=h;o<g;o++)a=a>>>8^p[255&(a^r[o])];return-1^a}},{}],46:[function(b,N,w){var l,a=b("../utils/common"),r=b("./trees"),s=b("./adler32"),h=b("./crc32"),p=b("./messages"),g=0,o=4,i=0,c=-2,n=-1,m=4,d=2,u=8,v=9,C=286,x=30,z=19,k=2*C+1,V=15,O=3,F=258,G=F+O+1,y=42,B=113,t=1,j=2,ie=3,Z=4;function se(e,M){return e.msg=p[M],M}function q(e){return(e<<1)-(4<e?9:0)}function ne(e){for(var M=e.length;0<=--M;)e[M]=0}function D(e){var M=e.state,R=M.pending;R>e.avail_out&&(R=e.avail_out),R!==0&&(a.arraySet(e.output,M.pending_buf,M.pending_out,R,e.next_out),e.next_out+=R,M.pending_out+=R,e.total_out+=R,e.avail_out-=R,M.pending-=R,M.pending===0&&(M.pending_out=0))}function I(e,M){r._tr_flush_block(e,0<=e.block_start?e.block_start:-1,e.strstart-e.block_start,M),e.block_start=e.strstart,D(e.strm)}function re(e,M){e.pending_buf[e.pending++]=M}function X(e,M){e.pending_buf[e.pending++]=M>>>8&255,e.pending_buf[e.pending++]=255&M}function H(e,M){var R,_,f=e.max_chain_length,T=e.strstart,P=e.prev_length,$=e.nice_match,S=e.strstart>e.w_size-G?e.strstart-(e.w_size-G):0,K=e.window,J=e.w_mask,Y=e.prev,ae=e.strstart+F,me=K[T+P-1],le=K[T+P];e.prev_length>=e.good_match&&(f>>=2),$>e.lookahead&&($=e.lookahead);do if(K[(R=M)+P]===le&&K[R+P-1]===me&&K[R]===K[T]&&K[++R]===K[T+1]){T+=2,R++;do;while(K[++T]===K[++R]&&K[++T]===K[++R]&&K[++T]===K[++R]&&K[++T]===K[++R]&&K[++T]===K[++R]&&K[++T]===K[++R]&&K[++T]===K[++R]&&K[++T]===K[++R]&&T<ae);if(_=F-(ae-T),T=ae-F,P<_){if(e.match_start=M,$<=(P=_))break;me=K[T+P-1],le=K[T+P]}}while((M=Y[M&J])>S&&--f!=0);return P<=e.lookahead?P:e.lookahead}function W(e){var M,R,_,f,T,P,$,S,K,J,Y=e.w_size;do{if(f=e.window_size-e.lookahead-e.strstart,e.strstart>=Y+(Y-G)){for(a.arraySet(e.window,e.window,Y,Y,0),e.match_start-=Y,e.strstart-=Y,e.block_start-=Y,M=R=e.hash_size;_=e.head[--M],e.head[M]=Y<=_?_-Y:0,--R;);for(M=R=Y;_=e.prev[--M],e.prev[M]=Y<=_?_-Y:0,--R;);f+=Y}if(e.strm.avail_in===0)break;if(P=e.strm,$=e.window,S=e.strstart+e.lookahead,K=f,J=void 0,J=P.avail_in,K<J&&(J=K),R=J===0?0:(P.avail_in-=J,a.arraySet($,P.input,P.next_in,J,S),P.state.wrap===1?P.adler=s(P.adler,$,J,S):P.state.wrap===2&&(P.adler=h(P.adler,$,J,S)),P.next_in+=J,P.total_in+=J,J),e.lookahead+=R,e.lookahead+e.insert>=O)for(T=e.strstart-e.insert,e.ins_h=e.window[T],e.ins_h=(e.ins_h<<e.hash_shift^e.window[T+1])&e.hash_mask;e.insert&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[T+O-1])&e.hash_mask,e.prev[T&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=T,T++,e.insert--,!(e.lookahead+e.insert<O)););}while(e.lookahead<G&&e.strm.avail_in!==0)}function _e(e,M){for(var R,_;;){if(e.lookahead<G){if(W(e),e.lookahead<G&&M===g)return t;if(e.lookahead===0)break}if(R=0,e.lookahead>=O&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+O-1])&e.hash_mask,R=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),R!==0&&e.strstart-R<=e.w_size-G&&(e.match_length=H(e,R)),e.match_length>=O)if(_=r._tr_tally(e,e.strstart-e.match_start,e.match_length-O),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=O){for(e.match_length--;e.strstart++,e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+O-1])&e.hash_mask,R=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart,--e.match_length!=0;);e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask;else _=r._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(_&&(I(e,!1),e.strm.avail_out===0))return t}return e.insert=e.strstart<O-1?e.strstart:O-1,M===o?(I(e,!0),e.strm.avail_out===0?ie:Z):e.last_lit&&(I(e,!1),e.strm.avail_out===0)?t:j}function ee(e,M){for(var R,_,f;;){if(e.lookahead<G){if(W(e),e.lookahead<G&&M===g)return t;if(e.lookahead===0)break}if(R=0,e.lookahead>=O&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+O-1])&e.hash_mask,R=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=O-1,R!==0&&e.prev_length<e.max_lazy_match&&e.strstart-R<=e.w_size-G&&(e.match_length=H(e,R),e.match_length<=5&&(e.strategy===1||e.match_length===O&&4096<e.strstart-e.match_start)&&(e.match_length=O-1)),e.prev_length>=O&&e.match_length<=e.prev_length){for(f=e.strstart+e.lookahead-O,_=r._tr_tally(e,e.strstart-1-e.prev_match,e.prev_length-O),e.lookahead-=e.prev_length-1,e.prev_length-=2;++e.strstart<=f&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+O-1])&e.hash_mask,R=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),--e.prev_length!=0;);if(e.match_available=0,e.match_length=O-1,e.strstart++,_&&(I(e,!1),e.strm.avail_out===0))return t}else if(e.match_available){if((_=r._tr_tally(e,0,e.window[e.strstart-1]))&&I(e,!1),e.strstart++,e.lookahead--,e.strm.avail_out===0)return t}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&(_=r._tr_tally(e,0,e.window[e.strstart-1]),e.match_available=0),e.insert=e.strstart<O-1?e.strstart:O-1,M===o?(I(e,!0),e.strm.avail_out===0?ie:Z):e.last_lit&&(I(e,!1),e.strm.avail_out===0)?t:j}function ce(e,M,R,_,f){this.good_length=e,this.max_lazy=M,this.nice_length=R,this.max_chain=_,this.func=f}function be(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=u,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new a.Buf16(2*k),this.dyn_dtree=new a.Buf16(2*(2*x+1)),this.bl_tree=new a.Buf16(2*(2*z+1)),ne(this.dyn_ltree),ne(this.dyn_dtree),ne(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new a.Buf16(V+1),this.heap=new a.Buf16(2*C+1),ne(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new a.Buf16(2*C+1),ne(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function he(e){var M;return e&&e.state?(e.total_in=e.total_out=0,e.data_type=d,(M=e.state).pending=0,M.pending_out=0,M.wrap<0&&(M.wrap=-M.wrap),M.status=M.wrap?y:B,e.adler=M.wrap===2?0:1,M.last_flush=g,r._tr_init(M),i):se(e,c)}function Ce(e){var M=he(e);return M===i&&function(R){R.window_size=2*R.w_size,ne(R.head),R.max_lazy_match=l[R.level].max_lazy,R.good_match=l[R.level].good_length,R.nice_match=l[R.level].nice_length,R.max_chain_length=l[R.level].max_chain,R.strstart=0,R.block_start=0,R.lookahead=0,R.insert=0,R.match_length=R.prev_length=O-1,R.match_available=0,R.ins_h=0}(e.state),M}function xe(e,M,R,_,f,T){if(!e)return c;var P=1;if(M===n&&(M=6),_<0?(P=0,_=-_):15<_&&(P=2,_-=16),f<1||v<f||R!==u||_<8||15<_||M<0||9<M||T<0||m<T)return se(e,c);_===8&&(_=9);var $=new be;return(e.state=$).strm=e,$.wrap=P,$.gzhead=null,$.w_bits=_,$.w_size=1<<$.w_bits,$.w_mask=$.w_size-1,$.hash_bits=f+7,$.hash_size=1<<$.hash_bits,$.hash_mask=$.hash_size-1,$.hash_shift=~~(($.hash_bits+O-1)/O),$.window=new a.Buf8(2*$.w_size),$.head=new a.Buf16($.hash_size),$.prev=new a.Buf16($.w_size),$.lit_bufsize=1<<f+6,$.pending_buf_size=4*$.lit_bufsize,$.pending_buf=new a.Buf8($.pending_buf_size),$.d_buf=1*$.lit_bufsize,$.l_buf=3*$.lit_bufsize,$.level=M,$.strategy=T,$.method=R,Ce(e)}l=[new ce(0,0,0,0,function(e,M){var R=65535;for(R>e.pending_buf_size-5&&(R=e.pending_buf_size-5);;){if(e.lookahead<=1){if(W(e),e.lookahead===0&&M===g)return t;if(e.lookahead===0)break}e.strstart+=e.lookahead,e.lookahead=0;var _=e.block_start+R;if((e.strstart===0||e.strstart>=_)&&(e.lookahead=e.strstart-_,e.strstart=_,I(e,!1),e.strm.avail_out===0)||e.strstart-e.block_start>=e.w_size-G&&(I(e,!1),e.strm.avail_out===0))return t}return e.insert=0,M===o?(I(e,!0),e.strm.avail_out===0?ie:Z):(e.strstart>e.block_start&&(I(e,!1),e.strm.avail_out),t)}),new ce(4,4,8,4,_e),new ce(4,5,16,8,_e),new ce(4,6,32,32,_e),new ce(4,4,16,16,ee),new ce(8,16,32,32,ee),new ce(8,16,128,128,ee),new ce(8,32,128,256,ee),new ce(32,128,258,1024,ee),new ce(32,258,258,4096,ee)],w.deflateInit=function(e,M){return xe(e,M,u,15,8,0)},w.deflateInit2=xe,w.deflateReset=Ce,w.deflateResetKeep=he,w.deflateSetHeader=function(e,M){return e&&e.state?e.state.wrap!==2?c:(e.state.gzhead=M,i):c},w.deflate=function(e,M){var R,_,f,T;if(!e||!e.state||5<M||M<0)return e?se(e,c):c;if(_=e.state,!e.output||!e.input&&e.avail_in!==0||_.status===666&&M!==o)return se(e,e.avail_out===0?-5:c);if(_.strm=e,R=_.last_flush,_.last_flush=M,_.status===y)if(_.wrap===2)e.adler=0,re(_,31),re(_,139),re(_,8),_.gzhead?(re(_,(_.gzhead.text?1:0)+(_.gzhead.hcrc?2:0)+(_.gzhead.extra?4:0)+(_.gzhead.name?8:0)+(_.gzhead.comment?16:0)),re(_,255&_.gzhead.time),re(_,_.gzhead.time>>8&255),re(_,_.gzhead.time>>16&255),re(_,_.gzhead.time>>24&255),re(_,_.level===9?2:2<=_.strategy||_.level<2?4:0),re(_,255&_.gzhead.os),_.gzhead.extra&&_.gzhead.extra.length&&(re(_,255&_.gzhead.extra.length),re(_,_.gzhead.extra.length>>8&255)),_.gzhead.hcrc&&(e.adler=h(e.adler,_.pending_buf,_.pending,0)),_.gzindex=0,_.status=69):(re(_,0),re(_,0),re(_,0),re(_,0),re(_,0),re(_,_.level===9?2:2<=_.strategy||_.level<2?4:0),re(_,3),_.status=B);else{var P=u+(_.w_bits-8<<4)<<8;P|=(2<=_.strategy||_.level<2?0:_.level<6?1:_.level===6?2:3)<<6,_.strstart!==0&&(P|=32),P+=31-P%31,_.status=B,X(_,P),_.strstart!==0&&(X(_,e.adler>>>16),X(_,65535&e.adler)),e.adler=1}if(_.status===69)if(_.gzhead.extra){for(f=_.pending;_.gzindex<(65535&_.gzhead.extra.length)&&(_.pending!==_.pending_buf_size||(_.gzhead.hcrc&&_.pending>f&&(e.adler=h(e.adler,_.pending_buf,_.pending-f,f)),D(e),f=_.pending,_.pending!==_.pending_buf_size));)re(_,255&_.gzhead.extra[_.gzindex]),_.gzindex++;_.gzhead.hcrc&&_.pending>f&&(e.adler=h(e.adler,_.pending_buf,_.pending-f,f)),_.gzindex===_.gzhead.extra.length&&(_.gzindex=0,_.status=73)}else _.status=73;if(_.status===73)if(_.gzhead.name){f=_.pending;do{if(_.pending===_.pending_buf_size&&(_.gzhead.hcrc&&_.pending>f&&(e.adler=h(e.adler,_.pending_buf,_.pending-f,f)),D(e),f=_.pending,_.pending===_.pending_buf_size)){T=1;break}T=_.gzindex<_.gzhead.name.length?255&_.gzhead.name.charCodeAt(_.gzindex++):0,re(_,T)}while(T!==0);_.gzhead.hcrc&&_.pending>f&&(e.adler=h(e.adler,_.pending_buf,_.pending-f,f)),T===0&&(_.gzindex=0,_.status=91)}else _.status=91;if(_.status===91)if(_.gzhead.comment){f=_.pending;do{if(_.pending===_.pending_buf_size&&(_.gzhead.hcrc&&_.pending>f&&(e.adler=h(e.adler,_.pending_buf,_.pending-f,f)),D(e),f=_.pending,_.pending===_.pending_buf_size)){T=1;break}T=_.gzindex<_.gzhead.comment.length?255&_.gzhead.comment.charCodeAt(_.gzindex++):0,re(_,T)}while(T!==0);_.gzhead.hcrc&&_.pending>f&&(e.adler=h(e.adler,_.pending_buf,_.pending-f,f)),T===0&&(_.status=103)}else _.status=103;if(_.status===103&&(_.gzhead.hcrc?(_.pending+2>_.pending_buf_size&&D(e),_.pending+2<=_.pending_buf_size&&(re(_,255&e.adler),re(_,e.adler>>8&255),e.adler=0,_.status=B)):_.status=B),_.pending!==0){if(D(e),e.avail_out===0)return _.last_flush=-1,i}else if(e.avail_in===0&&q(M)<=q(R)&&M!==o)return se(e,-5);if(_.status===666&&e.avail_in!==0)return se(e,-5);if(e.avail_in!==0||_.lookahead!==0||M!==g&&_.status!==666){var $=_.strategy===2?function(S,K){for(var J;;){if(S.lookahead===0&&(W(S),S.lookahead===0)){if(K===g)return t;break}if(S.match_length=0,J=r._tr_tally(S,0,S.window[S.strstart]),S.lookahead--,S.strstart++,J&&(I(S,!1),S.strm.avail_out===0))return t}return S.insert=0,K===o?(I(S,!0),S.strm.avail_out===0?ie:Z):S.last_lit&&(I(S,!1),S.strm.avail_out===0)?t:j}(_,M):_.strategy===3?function(S,K){for(var J,Y,ae,me,le=S.window;;){if(S.lookahead<=F){if(W(S),S.lookahead<=F&&K===g)return t;if(S.lookahead===0)break}if(S.match_length=0,S.lookahead>=O&&0<S.strstart&&(Y=le[ae=S.strstart-1])===le[++ae]&&Y===le[++ae]&&Y===le[++ae]){me=S.strstart+F;do;while(Y===le[++ae]&&Y===le[++ae]&&Y===le[++ae]&&Y===le[++ae]&&Y===le[++ae]&&Y===le[++ae]&&Y===le[++ae]&&Y===le[++ae]&&ae<me);S.match_length=F-(me-ae),S.match_length>S.lookahead&&(S.match_length=S.lookahead)}if(S.match_length>=O?(J=r._tr_tally(S,1,S.match_length-O),S.lookahead-=S.match_length,S.strstart+=S.match_length,S.match_length=0):(J=r._tr_tally(S,0,S.window[S.strstart]),S.lookahead--,S.strstart++),J&&(I(S,!1),S.strm.avail_out===0))return t}return S.insert=0,K===o?(I(S,!0),S.strm.avail_out===0?ie:Z):S.last_lit&&(I(S,!1),S.strm.avail_out===0)?t:j}(_,M):l[_.level].func(_,M);if($!==ie&&$!==Z||(_.status=666),$===t||$===ie)return e.avail_out===0&&(_.last_flush=-1),i;if($===j&&(M===1?r._tr_align(_):M!==5&&(r._tr_stored_block(_,0,0,!1),M===3&&(ne(_.head),_.lookahead===0&&(_.strstart=0,_.block_start=0,_.insert=0))),D(e),e.avail_out===0))return _.last_flush=-1,i}return M!==o?i:_.wrap<=0?1:(_.wrap===2?(re(_,255&e.adler),re(_,e.adler>>8&255),re(_,e.adler>>16&255),re(_,e.adler>>24&255),re(_,255&e.total_in),re(_,e.total_in>>8&255),re(_,e.total_in>>16&255),re(_,e.total_in>>24&255)):(X(_,e.adler>>>16),X(_,65535&e.adler)),D(e),0<_.wrap&&(_.wrap=-_.wrap),_.pending!==0?i:1)},w.deflateEnd=function(e){var M;return e&&e.state?(M=e.state.status)!==y&&M!==69&&M!==73&&M!==91&&M!==103&&M!==B&&M!==666?se(e,c):(e.state=null,M===B?se(e,-3):i):c},w.deflateSetDictionary=function(e,M){var R,_,f,T,P,$,S,K,J=M.length;if(!e||!e.state||(T=(R=e.state).wrap)===2||T===1&&R.status!==y||R.lookahead)return c;for(T===1&&(e.adler=s(e.adler,M,J,0)),R.wrap=0,J>=R.w_size&&(T===0&&(ne(R.head),R.strstart=0,R.block_start=0,R.insert=0),K=new a.Buf8(R.w_size),a.arraySet(K,M,J-R.w_size,R.w_size,0),M=K,J=R.w_size),P=e.avail_in,$=e.next_in,S=e.input,e.avail_in=J,e.next_in=0,e.input=M,W(R);R.lookahead>=O;){for(_=R.strstart,f=R.lookahead-(O-1);R.ins_h=(R.ins_h<<R.hash_shift^R.window[_+O-1])&R.hash_mask,R.prev[_&R.w_mask]=R.head[R.ins_h],R.head[R.ins_h]=_,_++,--f;);R.strstart=_,R.lookahead=O-1,W(R)}return R.strstart+=R.lookahead,R.block_start=R.strstart,R.insert=R.lookahead,R.lookahead=0,R.match_length=R.prev_length=O-1,R.match_available=0,e.next_in=$,e.input=S,e.avail_in=P,R.wrap=T,i},w.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(b,N,w){N.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(b,N,w){N.exports=function(l,a){var r,s,h,p,g,o,i,c,n,m,d,u,v,C,x,z,k,V,O,F,G,y,B,t,j;r=l.state,s=l.next_in,t=l.input,h=s+(l.avail_in-5),p=l.next_out,j=l.output,g=p-(a-l.avail_out),o=p+(l.avail_out-257),i=r.dmax,c=r.wsize,n=r.whave,m=r.wnext,d=r.window,u=r.hold,v=r.bits,C=r.lencode,x=r.distcode,z=(1<<r.lenbits)-1,k=(1<<r.distbits)-1;e:do{v<15&&(u+=t[s++]<<v,v+=8,u+=t[s++]<<v,v+=8),V=C[u&z];t:for(;;){if(u>>>=O=V>>>24,v-=O,(O=V>>>16&255)===0)j[p++]=65535&V;else{if(!(16&O)){if(!(64&O)){V=C[(65535&V)+(u&(1<<O)-1)];continue t}if(32&O){r.mode=12;break e}l.msg="invalid literal/length code",r.mode=30;break e}F=65535&V,(O&=15)&&(v<O&&(u+=t[s++]<<v,v+=8),F+=u&(1<<O)-1,u>>>=O,v-=O),v<15&&(u+=t[s++]<<v,v+=8,u+=t[s++]<<v,v+=8),V=x[u&k];r:for(;;){if(u>>>=O=V>>>24,v-=O,!(16&(O=V>>>16&255))){if(!(64&O)){V=x[(65535&V)+(u&(1<<O)-1)];continue r}l.msg="invalid distance code",r.mode=30;break e}if(G=65535&V,v<(O&=15)&&(u+=t[s++]<<v,(v+=8)<O&&(u+=t[s++]<<v,v+=8)),i<(G+=u&(1<<O)-1)){l.msg="invalid distance too far back",r.mode=30;break e}if(u>>>=O,v-=O,(O=p-g)<G){if(n<(O=G-O)&&r.sane){l.msg="invalid distance too far back",r.mode=30;break e}if(B=d,(y=0)===m){if(y+=c-O,O<F){for(F-=O;j[p++]=d[y++],--O;);y=p-G,B=j}}else if(m<O){if(y+=c+m-O,(O-=m)<F){for(F-=O;j[p++]=d[y++],--O;);if(y=0,m<F){for(F-=O=m;j[p++]=d[y++],--O;);y=p-G,B=j}}}else if(y+=m-O,O<F){for(F-=O;j[p++]=d[y++],--O;);y=p-G,B=j}for(;2<F;)j[p++]=B[y++],j[p++]=B[y++],j[p++]=B[y++],F-=3;F&&(j[p++]=B[y++],1<F&&(j[p++]=B[y++]))}else{for(y=p-G;j[p++]=j[y++],j[p++]=j[y++],j[p++]=j[y++],2<(F-=3););F&&(j[p++]=j[y++],1<F&&(j[p++]=j[y++]))}break}}break}}while(s<h&&p<o);s-=F=v>>3,u&=(1<<(v-=F<<3))-1,l.next_in=s,l.next_out=p,l.avail_in=s<h?h-s+5:5-(s-h),l.avail_out=p<o?o-p+257:257-(p-o),r.hold=u,r.bits=v}},{}],49:[function(b,N,w){var l=b("../utils/common"),a=b("./adler32"),r=b("./crc32"),s=b("./inffast"),h=b("./inftrees"),p=1,g=2,o=0,i=-2,c=1,n=852,m=592;function d(y){return(y>>>24&255)+(y>>>8&65280)+((65280&y)<<8)+((255&y)<<24)}function u(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new l.Buf16(320),this.work=new l.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function v(y){var B;return y&&y.state?(B=y.state,y.total_in=y.total_out=B.total=0,y.msg="",B.wrap&&(y.adler=1&B.wrap),B.mode=c,B.last=0,B.havedict=0,B.dmax=32768,B.head=null,B.hold=0,B.bits=0,B.lencode=B.lendyn=new l.Buf32(n),B.distcode=B.distdyn=new l.Buf32(m),B.sane=1,B.back=-1,o):i}function C(y){var B;return y&&y.state?((B=y.state).wsize=0,B.whave=0,B.wnext=0,v(y)):i}function x(y,B){var t,j;return y&&y.state?(j=y.state,B<0?(t=0,B=-B):(t=1+(B>>4),B<48&&(B&=15)),B&&(B<8||15<B)?i:(j.window!==null&&j.wbits!==B&&(j.window=null),j.wrap=t,j.wbits=B,C(y))):i}function z(y,B){var t,j;return y?(j=new u,(y.state=j).window=null,(t=x(y,B))!==o&&(y.state=null),t):i}var k,V,O=!0;function F(y){if(O){var B;for(k=new l.Buf32(512),V=new l.Buf32(32),B=0;B<144;)y.lens[B++]=8;for(;B<256;)y.lens[B++]=9;for(;B<280;)y.lens[B++]=7;for(;B<288;)y.lens[B++]=8;for(h(p,y.lens,0,288,k,0,y.work,{bits:9}),B=0;B<32;)y.lens[B++]=5;h(g,y.lens,0,32,V,0,y.work,{bits:5}),O=!1}y.lencode=k,y.lenbits=9,y.distcode=V,y.distbits=5}function G(y,B,t,j){var ie,Z=y.state;return Z.window===null&&(Z.wsize=1<<Z.wbits,Z.wnext=0,Z.whave=0,Z.window=new l.Buf8(Z.wsize)),j>=Z.wsize?(l.arraySet(Z.window,B,t-Z.wsize,Z.wsize,0),Z.wnext=0,Z.whave=Z.wsize):(j<(ie=Z.wsize-Z.wnext)&&(ie=j),l.arraySet(Z.window,B,t-j,ie,Z.wnext),(j-=ie)?(l.arraySet(Z.window,B,t-j,j,0),Z.wnext=j,Z.whave=Z.wsize):(Z.wnext+=ie,Z.wnext===Z.wsize&&(Z.wnext=0),Z.whave<Z.wsize&&(Z.whave+=ie))),0}w.inflateReset=C,w.inflateReset2=x,w.inflateResetKeep=v,w.inflateInit=function(y){return z(y,15)},w.inflateInit2=z,w.inflate=function(y,B){var t,j,ie,Z,se,q,ne,D,I,re,X,H,W,_e,ee,ce,be,he,Ce,xe,e,M,R,_,f=0,T=new l.Buf8(4),P=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!y||!y.state||!y.output||!y.input&&y.avail_in!==0)return i;(t=y.state).mode===12&&(t.mode=13),se=y.next_out,ie=y.output,ne=y.avail_out,Z=y.next_in,j=y.input,q=y.avail_in,D=t.hold,I=t.bits,re=q,X=ne,M=o;e:for(;;)switch(t.mode){case c:if(t.wrap===0){t.mode=13;break}for(;I<16;){if(q===0)break e;q--,D+=j[Z++]<<I,I+=8}if(2&t.wrap&&D===35615){T[t.check=0]=255&D,T[1]=D>>>8&255,t.check=r(t.check,T,2,0),I=D=0,t.mode=2;break}if(t.flags=0,t.head&&(t.head.done=!1),!(1&t.wrap)||(((255&D)<<8)+(D>>8))%31){y.msg="incorrect header check",t.mode=30;break}if((15&D)!=8){y.msg="unknown compression method",t.mode=30;break}if(I-=4,e=8+(15&(D>>>=4)),t.wbits===0)t.wbits=e;else if(e>t.wbits){y.msg="invalid window size",t.mode=30;break}t.dmax=1<<e,y.adler=t.check=1,t.mode=512&D?10:12,I=D=0;break;case 2:for(;I<16;){if(q===0)break e;q--,D+=j[Z++]<<I,I+=8}if(t.flags=D,(255&t.flags)!=8){y.msg="unknown compression method",t.mode=30;break}if(57344&t.flags){y.msg="unknown header flags set",t.mode=30;break}t.head&&(t.head.text=D>>8&1),512&t.flags&&(T[0]=255&D,T[1]=D>>>8&255,t.check=r(t.check,T,2,0)),I=D=0,t.mode=3;case 3:for(;I<32;){if(q===0)break e;q--,D+=j[Z++]<<I,I+=8}t.head&&(t.head.time=D),512&t.flags&&(T[0]=255&D,T[1]=D>>>8&255,T[2]=D>>>16&255,T[3]=D>>>24&255,t.check=r(t.check,T,4,0)),I=D=0,t.mode=4;case 4:for(;I<16;){if(q===0)break e;q--,D+=j[Z++]<<I,I+=8}t.head&&(t.head.xflags=255&D,t.head.os=D>>8),512&t.flags&&(T[0]=255&D,T[1]=D>>>8&255,t.check=r(t.check,T,2,0)),I=D=0,t.mode=5;case 5:if(1024&t.flags){for(;I<16;){if(q===0)break e;q--,D+=j[Z++]<<I,I+=8}t.length=D,t.head&&(t.head.extra_len=D),512&t.flags&&(T[0]=255&D,T[1]=D>>>8&255,t.check=r(t.check,T,2,0)),I=D=0}else t.head&&(t.head.extra=null);t.mode=6;case 6:if(1024&t.flags&&(q<(H=t.length)&&(H=q),H&&(t.head&&(e=t.head.extra_len-t.length,t.head.extra||(t.head.extra=new Array(t.head.extra_len)),l.arraySet(t.head.extra,j,Z,H,e)),512&t.flags&&(t.check=r(t.check,j,H,Z)),q-=H,Z+=H,t.length-=H),t.length))break e;t.length=0,t.mode=7;case 7:if(2048&t.flags){if(q===0)break e;for(H=0;e=j[Z+H++],t.head&&e&&t.length<65536&&(t.head.name+=String.fromCharCode(e)),e&&H<q;);if(512&t.flags&&(t.check=r(t.check,j,H,Z)),q-=H,Z+=H,e)break e}else t.head&&(t.head.name=null);t.length=0,t.mode=8;case 8:if(4096&t.flags){if(q===0)break e;for(H=0;e=j[Z+H++],t.head&&e&&t.length<65536&&(t.head.comment+=String.fromCharCode(e)),e&&H<q;);if(512&t.flags&&(t.check=r(t.check,j,H,Z)),q-=H,Z+=H,e)break e}else t.head&&(t.head.comment=null);t.mode=9;case 9:if(512&t.flags){for(;I<16;){if(q===0)break e;q--,D+=j[Z++]<<I,I+=8}if(D!==(65535&t.check)){y.msg="header crc mismatch",t.mode=30;break}I=D=0}t.head&&(t.head.hcrc=t.flags>>9&1,t.head.done=!0),y.adler=t.check=0,t.mode=12;break;case 10:for(;I<32;){if(q===0)break e;q--,D+=j[Z++]<<I,I+=8}y.adler=t.check=d(D),I=D=0,t.mode=11;case 11:if(t.havedict===0)return y.next_out=se,y.avail_out=ne,y.next_in=Z,y.avail_in=q,t.hold=D,t.bits=I,2;y.adler=t.check=1,t.mode=12;case 12:if(B===5||B===6)break e;case 13:if(t.last){D>>>=7&I,I-=7&I,t.mode=27;break}for(;I<3;){if(q===0)break e;q--,D+=j[Z++]<<I,I+=8}switch(t.last=1&D,I-=1,3&(D>>>=1)){case 0:t.mode=14;break;case 1:if(F(t),t.mode=20,B!==6)break;D>>>=2,I-=2;break e;case 2:t.mode=17;break;case 3:y.msg="invalid block type",t.mode=30}D>>>=2,I-=2;break;case 14:for(D>>>=7&I,I-=7&I;I<32;){if(q===0)break e;q--,D+=j[Z++]<<I,I+=8}if((65535&D)!=(D>>>16^65535)){y.msg="invalid stored block lengths",t.mode=30;break}if(t.length=65535&D,I=D=0,t.mode=15,B===6)break e;case 15:t.mode=16;case 16:if(H=t.length){if(q<H&&(H=q),ne<H&&(H=ne),H===0)break e;l.arraySet(ie,j,Z,H,se),q-=H,Z+=H,ne-=H,se+=H,t.length-=H;break}t.mode=12;break;case 17:for(;I<14;){if(q===0)break e;q--,D+=j[Z++]<<I,I+=8}if(t.nlen=257+(31&D),D>>>=5,I-=5,t.ndist=1+(31&D),D>>>=5,I-=5,t.ncode=4+(15&D),D>>>=4,I-=4,286<t.nlen||30<t.ndist){y.msg="too many length or distance symbols",t.mode=30;break}t.have=0,t.mode=18;case 18:for(;t.have<t.ncode;){for(;I<3;){if(q===0)break e;q--,D+=j[Z++]<<I,I+=8}t.lens[P[t.have++]]=7&D,D>>>=3,I-=3}for(;t.have<19;)t.lens[P[t.have++]]=0;if(t.lencode=t.lendyn,t.lenbits=7,R={bits:t.lenbits},M=h(0,t.lens,0,19,t.lencode,0,t.work,R),t.lenbits=R.bits,M){y.msg="invalid code lengths set",t.mode=30;break}t.have=0,t.mode=19;case 19:for(;t.have<t.nlen+t.ndist;){for(;ce=(f=t.lencode[D&(1<<t.lenbits)-1])>>>16&255,be=65535&f,!((ee=f>>>24)<=I);){if(q===0)break e;q--,D+=j[Z++]<<I,I+=8}if(be<16)D>>>=ee,I-=ee,t.lens[t.have++]=be;else{if(be===16){for(_=ee+2;I<_;){if(q===0)break e;q--,D+=j[Z++]<<I,I+=8}if(D>>>=ee,I-=ee,t.have===0){y.msg="invalid bit length repeat",t.mode=30;break}e=t.lens[t.have-1],H=3+(3&D),D>>>=2,I-=2}else if(be===17){for(_=ee+3;I<_;){if(q===0)break e;q--,D+=j[Z++]<<I,I+=8}I-=ee,e=0,H=3+(7&(D>>>=ee)),D>>>=3,I-=3}else{for(_=ee+7;I<_;){if(q===0)break e;q--,D+=j[Z++]<<I,I+=8}I-=ee,e=0,H=11+(127&(D>>>=ee)),D>>>=7,I-=7}if(t.have+H>t.nlen+t.ndist){y.msg="invalid bit length repeat",t.mode=30;break}for(;H--;)t.lens[t.have++]=e}}if(t.mode===30)break;if(t.lens[256]===0){y.msg="invalid code -- missing end-of-block",t.mode=30;break}if(t.lenbits=9,R={bits:t.lenbits},M=h(p,t.lens,0,t.nlen,t.lencode,0,t.work,R),t.lenbits=R.bits,M){y.msg="invalid literal/lengths set",t.mode=30;break}if(t.distbits=6,t.distcode=t.distdyn,R={bits:t.distbits},M=h(g,t.lens,t.nlen,t.ndist,t.distcode,0,t.work,R),t.distbits=R.bits,M){y.msg="invalid distances set",t.mode=30;break}if(t.mode=20,B===6)break e;case 20:t.mode=21;case 21:if(6<=q&&258<=ne){y.next_out=se,y.avail_out=ne,y.next_in=Z,y.avail_in=q,t.hold=D,t.bits=I,s(y,X),se=y.next_out,ie=y.output,ne=y.avail_out,Z=y.next_in,j=y.input,q=y.avail_in,D=t.hold,I=t.bits,t.mode===12&&(t.back=-1);break}for(t.back=0;ce=(f=t.lencode[D&(1<<t.lenbits)-1])>>>16&255,be=65535&f,!((ee=f>>>24)<=I);){if(q===0)break e;q--,D+=j[Z++]<<I,I+=8}if(ce&&!(240&ce)){for(he=ee,Ce=ce,xe=be;ce=(f=t.lencode[xe+((D&(1<<he+Ce)-1)>>he)])>>>16&255,be=65535&f,!(he+(ee=f>>>24)<=I);){if(q===0)break e;q--,D+=j[Z++]<<I,I+=8}D>>>=he,I-=he,t.back+=he}if(D>>>=ee,I-=ee,t.back+=ee,t.length=be,ce===0){t.mode=26;break}if(32&ce){t.back=-1,t.mode=12;break}if(64&ce){y.msg="invalid literal/length code",t.mode=30;break}t.extra=15&ce,t.mode=22;case 22:if(t.extra){for(_=t.extra;I<_;){if(q===0)break e;q--,D+=j[Z++]<<I,I+=8}t.length+=D&(1<<t.extra)-1,D>>>=t.extra,I-=t.extra,t.back+=t.extra}t.was=t.length,t.mode=23;case 23:for(;ce=(f=t.distcode[D&(1<<t.distbits)-1])>>>16&255,be=65535&f,!((ee=f>>>24)<=I);){if(q===0)break e;q--,D+=j[Z++]<<I,I+=8}if(!(240&ce)){for(he=ee,Ce=ce,xe=be;ce=(f=t.distcode[xe+((D&(1<<he+Ce)-1)>>he)])>>>16&255,be=65535&f,!(he+(ee=f>>>24)<=I);){if(q===0)break e;q--,D+=j[Z++]<<I,I+=8}D>>>=he,I-=he,t.back+=he}if(D>>>=ee,I-=ee,t.back+=ee,64&ce){y.msg="invalid distance code",t.mode=30;break}t.offset=be,t.extra=15&ce,t.mode=24;case 24:if(t.extra){for(_=t.extra;I<_;){if(q===0)break e;q--,D+=j[Z++]<<I,I+=8}t.offset+=D&(1<<t.extra)-1,D>>>=t.extra,I-=t.extra,t.back+=t.extra}if(t.offset>t.dmax){y.msg="invalid distance too far back",t.mode=30;break}t.mode=25;case 25:if(ne===0)break e;if(H=X-ne,t.offset>H){if((H=t.offset-H)>t.whave&&t.sane){y.msg="invalid distance too far back",t.mode=30;break}W=H>t.wnext?(H-=t.wnext,t.wsize-H):t.wnext-H,H>t.length&&(H=t.length),_e=t.window}else _e=ie,W=se-t.offset,H=t.length;for(ne<H&&(H=ne),ne-=H,t.length-=H;ie[se++]=_e[W++],--H;);t.length===0&&(t.mode=21);break;case 26:if(ne===0)break e;ie[se++]=t.length,ne--,t.mode=21;break;case 27:if(t.wrap){for(;I<32;){if(q===0)break e;q--,D|=j[Z++]<<I,I+=8}if(X-=ne,y.total_out+=X,t.total+=X,X&&(y.adler=t.check=t.flags?r(t.check,ie,X,se-X):a(t.check,ie,X,se-X)),X=ne,(t.flags?D:d(D))!==t.check){y.msg="incorrect data check",t.mode=30;break}I=D=0}t.mode=28;case 28:if(t.wrap&&t.flags){for(;I<32;){if(q===0)break e;q--,D+=j[Z++]<<I,I+=8}if(D!==(4294967295&t.total)){y.msg="incorrect length check",t.mode=30;break}I=D=0}t.mode=29;case 29:M=1;break e;case 30:M=-3;break e;case 31:return-4;case 32:default:return i}return y.next_out=se,y.avail_out=ne,y.next_in=Z,y.avail_in=q,t.hold=D,t.bits=I,(t.wsize||X!==y.avail_out&&t.mode<30&&(t.mode<27||B!==4))&&G(y,y.output,y.next_out,X-y.avail_out)?(t.mode=31,-4):(re-=y.avail_in,X-=y.avail_out,y.total_in+=re,y.total_out+=X,t.total+=X,t.wrap&&X&&(y.adler=t.check=t.flags?r(t.check,ie,X,y.next_out-X):a(t.check,ie,X,y.next_out-X)),y.data_type=t.bits+(t.last?64:0)+(t.mode===12?128:0)+(t.mode===20||t.mode===15?256:0),(re==0&&X===0||B===4)&&M===o&&(M=-5),M)},w.inflateEnd=function(y){if(!y||!y.state)return i;var B=y.state;return B.window&&(B.window=null),y.state=null,o},w.inflateGetHeader=function(y,B){var t;return y&&y.state&&2&(t=y.state).wrap?((t.head=B).done=!1,o):i},w.inflateSetDictionary=function(y,B){var t,j=B.length;return y&&y.state?(t=y.state).wrap!==0&&t.mode!==11?i:t.mode===11&&a(1,B,j,0)!==t.check?-3:G(y,B,j,j)?(t.mode=31,-4):(t.havedict=1,o):i},w.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(b,N,w){var l=b("../utils/common"),a=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],r=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],s=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],h=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];N.exports=function(p,g,o,i,c,n,m,d){var u,v,C,x,z,k,V,O,F,G=d.bits,y=0,B=0,t=0,j=0,ie=0,Z=0,se=0,q=0,ne=0,D=0,I=null,re=0,X=new l.Buf16(16),H=new l.Buf16(16),W=null,_e=0;for(y=0;y<=15;y++)X[y]=0;for(B=0;B<i;B++)X[g[o+B]]++;for(ie=G,j=15;1<=j&&X[j]===0;j--);if(j<ie&&(ie=j),j===0)return c[n++]=20971520,c[n++]=20971520,d.bits=1,0;for(t=1;t<j&&X[t]===0;t++);for(ie<t&&(ie=t),y=q=1;y<=15;y++)if(q<<=1,(q-=X[y])<0)return-1;if(0<q&&(p===0||j!==1))return-1;for(H[1]=0,y=1;y<15;y++)H[y+1]=H[y]+X[y];for(B=0;B<i;B++)g[o+B]!==0&&(m[H[g[o+B]]++]=B);if(k=p===0?(I=W=m,19):p===1?(I=a,re-=257,W=r,_e-=257,256):(I=s,W=h,-1),y=t,z=n,se=B=D=0,C=-1,x=(ne=1<<(Z=ie))-1,p===1&&852<ne||p===2&&592<ne)return 1;for(;;){for(V=y-se,F=m[B]<k?(O=0,m[B]):m[B]>k?(O=W[_e+m[B]],I[re+m[B]]):(O=96,0),u=1<<y-se,t=v=1<<Z;c[z+(D>>se)+(v-=u)]=V<<24|O<<16|F|0,v!==0;);for(u=1<<y-1;D&u;)u>>=1;if(u!==0?(D&=u-1,D+=u):D=0,B++,--X[y]==0){if(y===j)break;y=g[o+m[B]]}if(ie<y&&(D&x)!==C){for(se===0&&(se=ie),z+=t,q=1<<(Z=y-se);Z+se<j&&!((q-=X[Z+se])<=0);)Z++,q<<=1;if(ne+=1<<Z,p===1&&852<ne||p===2&&592<ne)return 1;c[C=D&x]=ie<<24|Z<<16|z-n|0}}return D!==0&&(c[z+D]=y-se<<24|64<<16|0),d.bits=ie,0}},{"../utils/common":41}],51:[function(b,N,w){N.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(b,N,w){var l=b("../utils/common"),a=0,r=1;function s(f){for(var T=f.length;0<=--T;)f[T]=0}var h=0,p=29,g=256,o=g+1+p,i=30,c=19,n=2*o+1,m=15,d=16,u=7,v=256,C=16,x=17,z=18,k=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],V=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],O=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],F=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],G=new Array(2*(o+2));s(G);var y=new Array(2*i);s(y);var B=new Array(512);s(B);var t=new Array(256);s(t);var j=new Array(p);s(j);var ie,Z,se,q=new Array(i);function ne(f,T,P,$,S){this.static_tree=f,this.extra_bits=T,this.extra_base=P,this.elems=$,this.max_length=S,this.has_stree=f&&f.length}function D(f,T){this.dyn_tree=f,this.max_code=0,this.stat_desc=T}function I(f){return f<256?B[f]:B[256+(f>>>7)]}function re(f,T){f.pending_buf[f.pending++]=255&T,f.pending_buf[f.pending++]=T>>>8&255}function X(f,T,P){f.bi_valid>d-P?(f.bi_buf|=T<<f.bi_valid&65535,re(f,f.bi_buf),f.bi_buf=T>>d-f.bi_valid,f.bi_valid+=P-d):(f.bi_buf|=T<<f.bi_valid&65535,f.bi_valid+=P)}function H(f,T,P){X(f,P[2*T],P[2*T+1])}function W(f,T){for(var P=0;P|=1&f,f>>>=1,P<<=1,0<--T;);return P>>>1}function _e(f,T,P){var $,S,K=new Array(m+1),J=0;for($=1;$<=m;$++)K[$]=J=J+P[$-1]<<1;for(S=0;S<=T;S++){var Y=f[2*S+1];Y!==0&&(f[2*S]=W(K[Y]++,Y))}}function ee(f){var T;for(T=0;T<o;T++)f.dyn_ltree[2*T]=0;for(T=0;T<i;T++)f.dyn_dtree[2*T]=0;for(T=0;T<c;T++)f.bl_tree[2*T]=0;f.dyn_ltree[2*v]=1,f.opt_len=f.static_len=0,f.last_lit=f.matches=0}function ce(f){8<f.bi_valid?re(f,f.bi_buf):0<f.bi_valid&&(f.pending_buf[f.pending++]=f.bi_buf),f.bi_buf=0,f.bi_valid=0}function be(f,T,P,$){var S=2*T,K=2*P;return f[S]<f[K]||f[S]===f[K]&&$[T]<=$[P]}function he(f,T,P){for(var $=f.heap[P],S=P<<1;S<=f.heap_len&&(S<f.heap_len&&be(T,f.heap[S+1],f.heap[S],f.depth)&&S++,!be(T,$,f.heap[S],f.depth));)f.heap[P]=f.heap[S],P=S,S<<=1;f.heap[P]=$}function Ce(f,T,P){var $,S,K,J,Y=0;if(f.last_lit!==0)for(;$=f.pending_buf[f.d_buf+2*Y]<<8|f.pending_buf[f.d_buf+2*Y+1],S=f.pending_buf[f.l_buf+Y],Y++,$===0?H(f,S,T):(H(f,(K=t[S])+g+1,T),(J=k[K])!==0&&X(f,S-=j[K],J),H(f,K=I(--$),P),(J=V[K])!==0&&X(f,$-=q[K],J)),Y<f.last_lit;);H(f,v,T)}function xe(f,T){var P,$,S,K=T.dyn_tree,J=T.stat_desc.static_tree,Y=T.stat_desc.has_stree,ae=T.stat_desc.elems,me=-1;for(f.heap_len=0,f.heap_max=n,P=0;P<ae;P++)K[2*P]!==0?(f.heap[++f.heap_len]=me=P,f.depth[P]=0):K[2*P+1]=0;for(;f.heap_len<2;)K[2*(S=f.heap[++f.heap_len]=me<2?++me:0)]=1,f.depth[S]=0,f.opt_len--,Y&&(f.static_len-=J[2*S+1]);for(T.max_code=me,P=f.heap_len>>1;1<=P;P--)he(f,K,P);for(S=ae;P=f.heap[1],f.heap[1]=f.heap[f.heap_len--],he(f,K,1),$=f.heap[1],f.heap[--f.heap_max]=P,f.heap[--f.heap_max]=$,K[2*S]=K[2*P]+K[2*$],f.depth[S]=(f.depth[P]>=f.depth[$]?f.depth[P]:f.depth[$])+1,K[2*P+1]=K[2*$+1]=S,f.heap[1]=S++,he(f,K,1),2<=f.heap_len;);f.heap[--f.heap_max]=f.heap[1],function(le,we){var Fe,Te,je,ge,Pe,Xe,Se=we.dyn_tree,ut=we.max_code,Ut=we.stat_desc.static_tree,Mt=we.stat_desc.has_stree,Vt=we.stat_desc.extra_bits,ct=we.stat_desc.extra_base,Ue=we.stat_desc.max_length,Le=0;for(ge=0;ge<=m;ge++)le.bl_count[ge]=0;for(Se[2*le.heap[le.heap_max]+1]=0,Fe=le.heap_max+1;Fe<n;Fe++)Ue<(ge=Se[2*Se[2*(Te=le.heap[Fe])+1]+1]+1)&&(ge=Ue,Le++),Se[2*Te+1]=ge,ut<Te||(le.bl_count[ge]++,Pe=0,ct<=Te&&(Pe=Vt[Te-ct]),Xe=Se[2*Te],le.opt_len+=Xe*(ge+Pe),Mt&&(le.static_len+=Xe*(Ut[2*Te+1]+Pe)));if(Le!==0){do{for(ge=Ue-1;le.bl_count[ge]===0;)ge--;le.bl_count[ge]--,le.bl_count[ge+1]+=2,le.bl_count[Ue]--,Le-=2}while(0<Le);for(ge=Ue;ge!==0;ge--)for(Te=le.bl_count[ge];Te!==0;)ut<(je=le.heap[--Fe])||(Se[2*je+1]!==ge&&(le.opt_len+=(ge-Se[2*je+1])*Se[2*je],Se[2*je+1]=ge),Te--)}}(f,T),_e(K,me,f.bl_count)}function e(f,T,P){var $,S,K=-1,J=T[1],Y=0,ae=7,me=4;for(J===0&&(ae=138,me=3),T[2*(P+1)+1]=65535,$=0;$<=P;$++)S=J,J=T[2*($+1)+1],++Y<ae&&S===J||(Y<me?f.bl_tree[2*S]+=Y:S!==0?(S!==K&&f.bl_tree[2*S]++,f.bl_tree[2*C]++):Y<=10?f.bl_tree[2*x]++:f.bl_tree[2*z]++,K=S,me=(Y=0)===J?(ae=138,3):S===J?(ae=6,3):(ae=7,4))}function M(f,T,P){var $,S,K=-1,J=T[1],Y=0,ae=7,me=4;for(J===0&&(ae=138,me=3),$=0;$<=P;$++)if(S=J,J=T[2*($+1)+1],!(++Y<ae&&S===J)){if(Y<me)for(;H(f,S,f.bl_tree),--Y!=0;);else S!==0?(S!==K&&(H(f,S,f.bl_tree),Y--),H(f,C,f.bl_tree),X(f,Y-3,2)):Y<=10?(H(f,x,f.bl_tree),X(f,Y-3,3)):(H(f,z,f.bl_tree),X(f,Y-11,7));K=S,me=(Y=0)===J?(ae=138,3):S===J?(ae=6,3):(ae=7,4)}}s(q);var R=!1;function _(f,T,P,$){X(f,(h<<1)+($?1:0),3),function(S,K,J,Y){ce(S),re(S,J),re(S,~J),l.arraySet(S.pending_buf,S.window,K,J,S.pending),S.pending+=J}(f,T,P)}w._tr_init=function(f){R||(function(){var T,P,$,S,K,J=new Array(m+1);for(S=$=0;S<p-1;S++)for(j[S]=$,T=0;T<1<<k[S];T++)t[$++]=S;for(t[$-1]=S,S=K=0;S<16;S++)for(q[S]=K,T=0;T<1<<V[S];T++)B[K++]=S;for(K>>=7;S<i;S++)for(q[S]=K<<7,T=0;T<1<<V[S]-7;T++)B[256+K++]=S;for(P=0;P<=m;P++)J[P]=0;for(T=0;T<=143;)G[2*T+1]=8,T++,J[8]++;for(;T<=255;)G[2*T+1]=9,T++,J[9]++;for(;T<=279;)G[2*T+1]=7,T++,J[7]++;for(;T<=287;)G[2*T+1]=8,T++,J[8]++;for(_e(G,o+1,J),T=0;T<i;T++)y[2*T+1]=5,y[2*T]=W(T,5);ie=new ne(G,k,g+1,o,m),Z=new ne(y,V,0,i,m),se=new ne(new Array(0),O,0,c,u)}(),R=!0),f.l_desc=new D(f.dyn_ltree,ie),f.d_desc=new D(f.dyn_dtree,Z),f.bl_desc=new D(f.bl_tree,se),f.bi_buf=0,f.bi_valid=0,ee(f)},w._tr_stored_block=_,w._tr_flush_block=function(f,T,P,$){var S,K,J=0;0<f.level?(f.strm.data_type===2&&(f.strm.data_type=function(Y){var ae,me=4093624447;for(ae=0;ae<=31;ae++,me>>>=1)if(1&me&&Y.dyn_ltree[2*ae]!==0)return a;if(Y.dyn_ltree[18]!==0||Y.dyn_ltree[20]!==0||Y.dyn_ltree[26]!==0)return r;for(ae=32;ae<g;ae++)if(Y.dyn_ltree[2*ae]!==0)return r;return a}(f)),xe(f,f.l_desc),xe(f,f.d_desc),J=function(Y){var ae;for(e(Y,Y.dyn_ltree,Y.l_desc.max_code),e(Y,Y.dyn_dtree,Y.d_desc.max_code),xe(Y,Y.bl_desc),ae=c-1;3<=ae&&Y.bl_tree[2*F[ae]+1]===0;ae--);return Y.opt_len+=3*(ae+1)+5+5+4,ae}(f),S=f.opt_len+3+7>>>3,(K=f.static_len+3+7>>>3)<=S&&(S=K)):S=K=P+5,P+4<=S&&T!==-1?_(f,T,P,$):f.strategy===4||K===S?(X(f,2+($?1:0),3),Ce(f,G,y)):(X(f,4+($?1:0),3),function(Y,ae,me,le){var we;for(X(Y,ae-257,5),X(Y,me-1,5),X(Y,le-4,4),we=0;we<le;we++)X(Y,Y.bl_tree[2*F[we]+1],3);M(Y,Y.dyn_ltree,ae-1),M(Y,Y.dyn_dtree,me-1)}(f,f.l_desc.max_code+1,f.d_desc.max_code+1,J+1),Ce(f,f.dyn_ltree,f.dyn_dtree)),ee(f),$&&ce(f)},w._tr_tally=function(f,T,P){return f.pending_buf[f.d_buf+2*f.last_lit]=T>>>8&255,f.pending_buf[f.d_buf+2*f.last_lit+1]=255&T,f.pending_buf[f.l_buf+f.last_lit]=255&P,f.last_lit++,T===0?f.dyn_ltree[2*P]++:(f.matches++,T--,f.dyn_ltree[2*(t[P]+g+1)]++,f.dyn_dtree[2*I(T)]++),f.last_lit===f.lit_bufsize-1},w._tr_align=function(f){X(f,2,3),H(f,v,G),function(T){T.bi_valid===16?(re(T,T.bi_buf),T.bi_buf=0,T.bi_valid=0):8<=T.bi_valid&&(T.pending_buf[T.pending++]=255&T.bi_buf,T.bi_buf>>=8,T.bi_valid-=8)}(f)}},{"../utils/common":41}],53:[function(b,N,w){N.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(b,N,w){(function(l){(function(a,r){if(!a.setImmediate){var s,h,p,g,o=1,i={},c=!1,n=a.document,m=Object.getPrototypeOf&&Object.getPrototypeOf(a);m=m&&m.setTimeout?m:a,s={}.toString.call(a.process)==="[object process]"?function(C){process.nextTick(function(){u(C)})}:function(){if(a.postMessage&&!a.importScripts){var C=!0,x=a.onmessage;return a.onmessage=function(){C=!1},a.postMessage("","*"),a.onmessage=x,C}}()?(g="setImmediate$"+Math.random()+"$",a.addEventListener?a.addEventListener("message",v,!1):a.attachEvent("onmessage",v),function(C){a.postMessage(g+C,"*")}):a.MessageChannel?((p=new MessageChannel).port1.onmessage=function(C){u(C.data)},function(C){p.port2.postMessage(C)}):n&&"onreadystatechange"in n.createElement("script")?(h=n.documentElement,function(C){var x=n.createElement("script");x.onreadystatechange=function(){u(C),x.onreadystatechange=null,h.removeChild(x),x=null},h.appendChild(x)}):function(C){setTimeout(u,0,C)},m.setImmediate=function(C){typeof C!="function"&&(C=new Function(""+C));for(var x=new Array(arguments.length-1),z=0;z<x.length;z++)x[z]=arguments[z+1];var k={callback:C,args:x};return i[o]=k,s(o),o++},m.clearImmediate=d}function d(C){delete i[C]}function u(C){if(c)setTimeout(u,0,C);else{var x=i[C];if(x){c=!0;try{(function(z){var k=z.callback,V=z.args;switch(V.length){case 0:k();break;case 1:k(V[0]);break;case 2:k(V[0],V[1]);break;case 3:k(V[0],V[1],V[2]);break;default:k.apply(r,V)}})(x)}finally{d(C),c=!1}}}}function v(C){C.source===a&&typeof C.data=="string"&&C.data.indexOf(g)===0&&u(+C.data.slice(g.length))}})(typeof self>"u"?l===void 0?this:l:self)}).call(this,typeof We<"u"?We:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})}(Qe)),Qe.exports}var vr=br();const yr=$t(vr);async function wr(U){const L=await Ee.get("/tool/gen/list",{params:U});return L.data.code===200?L.data:Promise.reject(new Error(L.data.msg))}async function kr(U){const L=await Ee.put("/tool/gen",U);return L.data.code===200?L.data.msg:Promise.reject(new Error(L.data.msg))}async function xr(U){const L=await Ee.delete("/tool/gen/"+U.join());return L.data.code===200?L.data.msg:Promise.reject(new Error(L.data.msg))}async function Er(U){const L=await Ee.get("/tool/gen/db/list",{params:U});return L.data.code===200?L.data:Promise.reject(new Error(L.data.msg))}async function Cr(U){const L=await Ee.post("/tool/gen/importTable",Et(U));return L.data.code===200?L.data.msg:Promise.reject(new Error(L.data.msg))}async function Tr(U){const L=await Ee.get("/tool/gen/synchDb/"+U);return L.data.code===200?L.data.msg:Promise.reject(new Error(L.data.msg))}async function Nr(U){const L=await Ee.get("/tool/gen/genCode/"+U);return L.data.code===200?L.data:Promise.reject(new Error(L.data.msg))}async function Sr(U){const L=await Ee.get("/tool/gen/preview/"+U);return L.data.code===200&&L.data.data?L.data.data:Promise.reject(new Error(L.data.msg))}async function dt(U){const L=await Ee.get("/tool/gen/"+U);return L.data.code===200&&L.data.data?L.data.data:Promise.reject(new Error(L.data.msg))}async function Or(U){const L=await Ee.post("/tool/gen/createTable",Et({sql:U}));return L.data.code===200?L.data.msg:Promise.reject(new Error(L.data.msg))}async function Ir(U){const[L,b]=await Promise.all([Sr(U),dt(U)]),{className:N,packageName:w,tplCategory:l}=b.info,a=w.replace(/\./g,"/"),r=[{key:`back/src/main/java/${a}/domain/${N}.java`,label:`${N}.java`,meta:{language:"java",text:L["vm/java/domain.java.vm"],path:`src/main/java/${a}/domain/${N}.java`}}],s=L["vm/java/sub-domain.java.vm"];if(s){const o="public class ",i=s.substring(s.indexOf(o)+o.length,s.indexOf(" extends BaseEntity"));r.push({key:`back/src/main/java/${a}/domain/${i}.java`,label:`${i}.java`,meta:{language:"java",text:s,path:`src/main/java/${a}/domain/${i}.java`}})}const h=lt(b),{modelName:p,moduleName:g}=h;return[{key:"front/src",label:"前端/src",children:[{key:`front/src/api/${g}/${p}`,label:`api/${g}/${p}`,children:[{key:`front/src/api/${g}/${p}/index.js`,label:"index.js",meta:{language:"js",text:Ie(Dt,h),path:`src/api/${g}/${p}/index.js`}}]},{key:`front/src/views/${g}/${p}`,label:`views/${g}/${p}`,children:[{key:`front/src/views/${g}/${p}/components`,label:"components",children:[{key:`front/src/views/${g}/${p}/components/${p}-edit.vue`,label:`${p}-edit.vue`,meta:{language:"vue",text:Ie(l==="tree"?Bt:l==="sub"?Ft:At,h),path:`src/views/${g}/${p}/components/${p}-edit.vue`}},{key:`front/src/views/${g}/${p}/components/${p}-search.vue`,label:`${p}-search.vue`,meta:{language:"vue",text:Ie(zt,h),path:`src/views/${g}/${p}/components/${p}-search.vue`}}]},{key:`front/src/views/${g}/${p}/index.vue`,label:"index.vue",meta:{language:"vue",text:Ie(l==="tree"?Rt:It,h),path:`src/views/${g}/${p}/index.vue`}}]}]},{key:"back/src/main",label:"后端/src/main",children:[{key:`back/src/main/java/${a}`,label:`java/${a}`,children:[{key:`back/src/main/java/${a}/controller`,label:"controller",children:[{key:`back/src/main/java/${a}/controller/${N}Controller.java`,label:`${N}Controller.java`,meta:{language:"java",text:L["vm/java/controller.java.vm"],path:`src/main/java/${a}/controller/${N}Controller.java`}}]},{key:`back/src/main/java/${a}/domain`,label:"domain",children:r},{key:`back/src/main/java/${a}/mapper`,label:"mapper",children:[{key:`back/src/main/java/${a}/mapper/${N}Mapper.java`,label:`${N}Mapper.java`,meta:{language:"java",text:L["vm/java/mapper.java.vm"],path:`src/main/java/${a}/mapper/${N}Mapper.java`}}]},{key:`back/src/main/java/${a}/service`,label:"service",children:[{key:`back/src/main/java/${a}/service/impl`,label:"impl",children:[{key:`back/src/main/java/${a}/service/impl/${N}ServiceImpl.java`,label:`${N}ServiceImpl.java`,meta:{language:"java",text:L["vm/java/serviceImpl.java.vm"],path:`src/main/java/${a}/service/impl/${N}ServiceImpl.java`}}]},{key:`back/src/main/java/${a}/service/I${N}Service.java`,label:`I${N}Service.java`,meta:{language:"java",text:L["vm/java/service.java.vm"],path:`src/main/java/${a}/service/I${N}Service.java`}}]}]},{key:"back/src/main/resources/mapper/system",label:"resources/mapper/system",children:[{key:`back/src/main/resources/mapper/system/${N}Mapper.xml`,label:`${N}Mapper.xml`,meta:{language:"xml",text:L["vm/xml/mapper.xml.vm"],path:`src/main/resources/mapper/system/${N}Mapper.xml`}}]}]},{key:"sql",label:"数据库",children:[{key:"sql/sys_menu.sql",label:`${p}Menu.sql`,meta:{language:"sql",text:L["vm/sql/sql.vm"],path:"sys_menu.sql"}}]}]}async function zr(U,L){const b=await Ee({url:"/tool/gen/batchGenCode",method:"GET",params:U,responseType:"blob"});await Wt(b);const N=new yr;await N.loadAsync(b.data,{}),(await Promise.all([...L].reverse().map(a=>dt(a)))).forEach(a=>{const{tplCategory:r}=a.info,s=lt(a),{modelName:h,moduleName:p}=s;N.file(`ele-admin/api/${p}/${h}/index.js`,Ie(Dt,s)),N.file(`ele-admin/views/${p}/${h}/components/${h}-edit.vue`,Ie(r==="tree"?Bt:r==="sub"?Ft:At,s)),N.file(`ele-admin/views/${p}/${h}/components/${h}-search.vue`,Ie(zt,s)),N.file(`ele-admin/views/${p}/${h}/index.vue`,Ie(r==="tree"?Rt:It,s))});const l=await N.generateAsync({type:"blob"});xt(l,`ruoyi_${Date.now()}.zip`)}const Ar={style:{cursor:"pointer"}},Dr={class:"form-table-index"},Rr={style:{flex:"1","text-align":"left"}},Br={__name:"gen-edit",props:Re({data:Object},{modelValue:{type:Boolean},modelModifiers:{}}),emits:Re(["done"],["update:modelValue"]),setup(U,{emit:L}){const b=U,N=L,w=Ve(U,"modelValue"),l=ue([]),a=ue([]),r=Zt(()=>{var k,V;const z=o.subTableName;return z?(V=(k=a.value.find(O=>O.tableName==z))==null?void 0:k.columns)!=null?V:[]:[]}),s=ue([]),h=ue(!0),p=ue(!1),g=ue(null),[o,i,c]=et({tableId:void 0,tableName:"",tableComment:"",functionAuthor:"",className:"",functionName:"",businessName:"",moduleName:"",packageName:"",parentMenuId:void 0,tplCategory:"crud",genType:"0",genPath:"/",treeCode:void 0,treeParentCode:void 0,treeName:void 0,subTableName:void 0,subTableFkName:void 0,remark:"",columns:[]}),n=qt({tableName:[{required:!0,message:"请输入表名称",type:"string",trigger:"blur"}],tableComment:[{required:!0,message:"请输入表描述",type:"string",trigger:"blur"}],functionAuthor:[{required:!0,message:"请输入作者",type:"string",trigger:"blur"}],className:[{required:!0,message:"请输入实体类名称",type:"string",trigger:"blur"}],functionName:[{required:!0,message:"请输入生成功能名",type:"string",trigger:"blur"}],businessName:[{required:!0,message:"请输入生成业务名",type:"string",trigger:"blur"}],moduleName:[{required:!0,message:"请输入生成模块名",type:"string",trigger:"blur"}],packageName:[{required:!0,message:"请输入生成包路径",type:"string",trigger:"blur"}],tplCategory:[{required:!0,message:"请选择生成模板",type:"string",trigger:"change"}]}),m=ue(""),d=()=>{w.value=!1},u=()=>{var z,k;(k=(z=g.value)==null?void 0:z.validate)==null||k.call(z,(V,O)=>{if(!V){const F=O?Object.keys(O).length:0;m.value=` 共有 ${F} 项校验不通过`;return}m.value="",p.value=!0,kr({...o,params:{treeCode:o.treeCode,treeName:o.treeName,treeParentCode:o.treeParentCode,parentMenuId:o.parentMenuId}}).then(F=>{p.value=!1,pe.success(F),d(),N("done")}).catch(F=>{p.value=!1,pe.error(F.message)})})},v=()=>{var z;(z=b.data)!=null&&z.tableId&&(h.value=!0,dt(b.data.tableId).then(k=>{c({...k.info,parentMenuId:k.info.parentMenuId==null||k.info.parentMenuId===""?void 0:Number(k.info.parentMenuId)}),l.value=k.info.columns,a.value=k.tables,h.value=!1}).catch(k=>{console.error(k),pe.error(k.message)}))},C=()=>{var z,k;i(),(k=(z=g.value)==null?void 0:z.clearValidate)==null||k.call(z),m.value=""},x=z=>{z==="reset"&&(o.genPath="/")};return ur().then(z=>{s.value=z!=null?z:[]}).catch(z=>{pe.error(z.message)}),(z,k)=>{var H;const V=Ct,O=Ye,F=rt,G=ot,y=yt,B=wt,t=Yt,j=Ht,ie=nt,Z=Xt,se=st,q=Jt,ne=at,D=Ot,I=Qt,re=Be,X=er;return oe(),de(X,{size:1320,style:{"max-width":"100%"},"append-to-body":!0,"destroy-on-close":!0,"body-style":{padding:"16px 10px"},"footer-style":{display:"flex",alignItems:"center"},title:`修改[${(H=U.data)==null?void 0:H.tableName}]生成配置`,modelValue:w.value,"onUpdate:modelValue":k[19]||(k[19]=W=>w.value=W),onOpened:v,onClosed:C},{footer:A(()=>[te("div",Rr,[m.value?(oe(),de(I,{key:0,type:"danger",icon:Q(Kt)},{default:A(()=>[te("span",null,Oe(m.value),1)]),_:1},8,["icon"])):ke("",!0)]),E(re,{onClick:d},{default:A(()=>k[28]||(k[28]=[fe("取消")])),_:1}),E(re,{type:"primary",loading:p.value,onClick:u},{default:A(()=>k[29]||(k[29]=[fe(" 保存 ")])),_:1},8,["loading"])]),default:A(()=>[E(D,{loading:h.value,style:{"padding-top":"2px"}},{default:A(()=>[E(ne,{ref_key:"formRef",ref:g,model:Q(o),rules:n,"label-width":"112px",class:"form-box",onSubmit:k[18]||(k[18]=tt(()=>{},["prevent"]))},{default:A(()=>[E(V,{"content-position":"left",style:{"margin-top":"10px"}},{default:A(()=>k[20]||(k[20]=[fe(" 基本信息 ")])),_:1}),E(se,{gutter:18},{default:A(()=>[E(G,{sm:8,xs:24},{default:A(()=>[E(F,{label:"表名称",prop:"tableName"},{default:A(()=>[E(O,{clearable:"",modelValue:Q(o).tableName,"onUpdate:modelValue":k[0]||(k[0]=W=>Q(o).tableName=W),placeholder:"请输入表名称"},null,8,["modelValue"])]),_:1})]),_:1}),E(G,{sm:8,xs:24},{default:A(()=>[E(F,{label:"表描述",prop:"tableComment"},{default:A(()=>[E(O,{clearable:"",modelValue:Q(o).tableComment,"onUpdate:modelValue":k[1]||(k[1]=W=>Q(o).tableComment=W),placeholder:"请输入表描述"},null,8,["modelValue"])]),_:1})]),_:1}),E(G,{sm:8,xs:24},{default:A(()=>[E(F,{label:"实体类名称",prop:"className"},{default:A(()=>[E(O,{clearable:"",modelValue:Q(o).className,"onUpdate:modelValue":k[2]||(k[2]=W=>Q(o).className=W),placeholder:"请输入实体类名称"},null,8,["modelValue"])]),_:1})]),_:1}),E(G,{sm:24,xs:24},{default:A(()=>[E(F,{label:"备注"},{default:A(()=>[E(O,{rows:2,type:"textarea",modelValue:Q(o).remark,"onUpdate:modelValue":k[3]||(k[3]=W=>Q(o).remark=W),placeholder:"请输入备注"},null,8,["modelValue"])]),_:1})]),_:1}),E(G,{span:24},{default:A(()=>[E(V,{"content-position":"left"},{default:A(()=>k[21]||(k[21]=[fe("生成信息")])),_:1})]),_:1}),E(G,{sm:8,xs:24},{default:A(()=>[E(F,{label:"作者",prop:"functionAuthor"},{default:A(()=>[E(O,{clearable:"",modelValue:Q(o).functionAuthor,"onUpdate:modelValue":k[4]||(k[4]=W=>Q(o).functionAuthor=W),placeholder:"请输入作者"},null,8,["modelValue"])]),_:1})]),_:1}),E(G,{sm:16,xs:24},{default:A(()=>[E(F,{prop:"packageName"},{label:A(()=>[E(Ne,{tip:"生成在哪个java包下，例如：com.ruoyi.system",label:"生成包路径"})]),default:A(()=>[E(O,{clearable:"",modelValue:Q(o).packageName,"onUpdate:modelValue":k[5]||(k[5]=W=>Q(o).packageName=W),placeholder:"请输入生成包路径"},null,8,["modelValue"])]),_:1})]),_:1}),E(G,{sm:8,xs:24},{default:A(()=>[E(F,{prop:"moduleName"},{label:A(()=>[E(Ne,{tip:"可理解为子系统名，例如：system",label:"生成模块名"})]),default:A(()=>[E(O,{clearable:"",modelValue:Q(o).moduleName,"onUpdate:modelValue":k[6]||(k[6]=W=>Q(o).moduleName=W),placeholder:"请输入生成模块名"},null,8,["modelValue"])]),_:1})]),_:1}),E(G,{sm:8,xs:24},{default:A(()=>[E(F,{prop:"businessName"},{label:A(()=>[E(Ne,{tip:"可理解为功能英文名，例如：user",label:"生成业务名"})]),default:A(()=>[E(O,{clearable:"",modelValue:Q(o).businessName,"onUpdate:modelValue":k[7]||(k[7]=W=>Q(o).businessName=W),placeholder:"请输入生成业务名"},null,8,["modelValue"])]),_:1})]),_:1}),E(G,{sm:8,xs:24},{default:A(()=>[E(F,{prop:"functionName"},{label:A(()=>[E(Ne,{tip:"用作类描述，例如：用户",label:"生成功能名"})]),default:A(()=>[E(O,{clearable:"",modelValue:Q(o).functionName,"onUpdate:modelValue":k[8]||(k[8]=W=>Q(o).functionName=W),placeholder:"请输入生成功能名"},null,8,["modelValue"])]),_:1})]),_:1}),E(G,{sm:8,xs:24},{default:A(()=>[E(F,{label:"生成模板",prop:"tplCategory"},{default:A(()=>[E(B,{modelValue:Q(o).tplCategory,"onUpdate:modelValue":k[9]||(k[9]=W=>Q(o).tplCategory=W),placeholder:"请选择生成模板",class:"ele-fluid","popper-options":{strategy:"fixed"}},{default:A(()=>[E(y,{label:"单表(增删改查)",value:"crud"}),E(y,{label:"树表(增删改查)",value:"tree"}),E(y,{label:"主子表(增删改查)",value:"sub"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),E(G,{sm:8,xs:24},{default:A(()=>[E(F,null,{label:A(()=>[E(Ne,{tip:"默认为zip压缩包下载，也可以自定义生成路径",label:"生成代码方式"})]),default:A(()=>[E(j,{modelValue:Q(o).genType,"onUpdate:modelValue":k[10]||(k[10]=W=>Q(o).genType=W)},{default:A(()=>[E(t,{value:"0",label:"zip压缩包"}),E(t,{value:"1",label:"自定义路径"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),E(G,{sm:8,xs:24},{default:A(()=>[E(F,null,{label:A(()=>[E(Ne,{tip:"分配到指定菜单下，例如：系统管理",label:"上级菜单"})]),default:A(()=>[E(dr,{modelValue:Q(o).parentMenuId,"onUpdate:modelValue":k[11]||(k[11]=W=>Q(o).parentMenuId=W)},null,8,["modelValue"])]),_:1})]),_:1}),Q(o).genType=="1"?(oe(),de(G,{key:0,span:24},{default:A(()=>[E(F,null,{label:A(()=>[E(Ne,{tip:"填写磁盘绝对路径，若不填写，则生成到当前 Web 项目下",label:"自定义路径"})]),default:A(()=>[E(O,{clearable:"",modelValue:Q(o).genPath,"onUpdate:modelValue":k[12]||(k[12]=W=>Q(o).genPath=W),placeholder:"请输入自定义路径"},{append:A(()=>[E(Z,{items:[{title:"恢复默认的生成基础路径",command:"reset"}],placement:"bottom-end","popper-options":{strategy:"fixed",modifiers:[{name:"offset",options:{offset:[12,12]}}]},onCommand:x},{default:A(()=>[te("div",Ar,[k[22]||(k[22]=te("span",null,"最近路径快速选择",-1)),E(ie,{size:12,style:{margin:"0 -4px 0 2px"}},{default:A(()=>[E(Q(Gt))]),_:1})])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})):ke("",!0),Q(o).tplCategory=="tree"?(oe(),de(G,{key:1,span:24},{default:A(()=>[E(V,{"content-position":"left"},{default:A(()=>k[23]||(k[23]=[fe("其它信息")])),_:1})]),_:1})):ke("",!0),Q(o).tplCategory=="tree"?(oe(),de(G,{key:2,sm:8,xs:24},{default:A(()=>[E(F,null,{label:A(()=>[E(Ne,{tip:"树显示的编码字段名，如：dept_id",label:"树编码字段"})]),default:A(()=>[E(Je,{data:l.value,modelValue:Q(o).treeCode,"onUpdate:modelValue":k[13]||(k[13]=W=>Q(o).treeCode=W),placeholder:"请选择树编码字段"},null,8,["data","modelValue"])]),_:1})]),_:1})):ke("",!0),Q(o).tplCategory=="tree"?(oe(),de(G,{key:3,sm:8,xs:24},{default:A(()=>[E(F,null,{label:A(()=>[E(Ne,{tip:"树显示的父编码字段名，如：parent_Id",label:"树父编码字段"})]),default:A(()=>[E(Je,{data:l.value,modelValue:Q(o).treeParentCode,"onUpdate:modelValue":k[14]||(k[14]=W=>Q(o).treeParentCode=W),placeholder:"请选择树父编码字段"},null,8,["data","modelValue"])]),_:1})]),_:1})):ke("",!0),Q(o).tplCategory=="tree"?(oe(),de(G,{key:4,sm:8,xs:24},{default:A(()=>[E(F,null,{label:A(()=>[E(Ne,{tip:"树节点的显示名称字段名，如：dept_name",label:"树名称字段"})]),default:A(()=>[E(Je,{data:l.value,modelValue:Q(o).treeName,"onUpdate:modelValue":k[15]||(k[15]=W=>Q(o).treeName=W),placeholder:"请选择树名称字段"},null,8,["data","modelValue"])]),_:1})]),_:1})):ke("",!0),Q(o).tplCategory=="sub"?(oe(),de(G,{key:5,span:24},{default:A(()=>[E(V,{"content-position":"left"},{default:A(()=>k[24]||(k[24]=[fe("关联信息")])),_:1})]),_:1})):ke("",!0),Q(o).tplCategory=="sub"?(oe(),de(G,{key:6,sm:8,xs:24},{default:A(()=>[E(F,{label:"关联子表的表名"},{default:A(()=>[E(B,{clearable:"",modelValue:Q(o).subTableName,"onUpdate:modelValue":k[16]||(k[16]=W=>Q(o).subTableName=W),placeholder:"请选择关联子表的表名",class:"ele-fluid","popper-options":{strategy:"fixed"}},{default:A(()=>[(oe(!0),ye(ze,null,De(a.value,W=>(oe(),de(y,{key:W.tableName,value:W.tableName,label:`${W.tableName}: ${W.tableComment}`},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})):ke("",!0),Q(o).tplCategory=="sub"?(oe(),de(G,{key:7,sm:8,xs:24},{default:A(()=>[E(F,{label:"子表关联的外键名"},{default:A(()=>[E(B,{clearable:"",modelValue:Q(o).subTableFkName,"onUpdate:modelValue":k[17]||(k[17]=W=>Q(o).subTableFkName=W),placeholder:"请选择子表关联的外键名",class:"ele-fluid","popper-options":{strategy:"fixed"}},{default:A(()=>[(oe(!0),ye(ze,null,De(r.value,W=>(oe(),de(y,{key:W.columnName,value:W.columnName,label:`${W.columnName}: ${W.columnComment}`},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})):ke("",!0)]),_:1}),E(V,{"content-position":"left"},{default:A(()=>k[25]||(k[25]=[fe("字段信息")])),_:1}),E(hr,{class:"form-table","table-style":{minWidth:"1280px"}},{colgroup:A(()=>k[26]||(k[26]=[te("col",{width:"38px"},null,-1),te("col",null,null,-1),te("col",{width:"140px"},null,-1),te("col",null,null,-1),te("col",{width:"120px"},null,-1),te("col",{width:"120px"},null,-1),te("col",{width:"48px"},null,-1),te("col",{width:"48px"},null,-1),te("col",{width:"48px"},null,-1),te("col",{width:"48px"},null,-1),te("col",{width:"100px"},null,-1),te("col",{width:"48px"},null,-1),te("col",{width:"128px"},null,-1),te("col",{width:"128px"},null,-1)])),thead:A(()=>k[27]||(k[27]=[te("tr",null,[te("th",{class:"form-table-index"}),te("th",null,"字段列名"),te("th",null,"字段描述"),te("th",null,"物理类型"),te("th",null,"Java类型"),te("th",null,"Java属性"),te("th",null,"插入"),te("th",null,"编辑"),te("th",null,"列表"),te("th",null,"查询"),te("th",null,"查询方式"),te("th",null,"必填"),te("th",null,"显示类型"),te("th",null,"字典类型")],-1)])),tbody:A(()=>[(oe(!0),ye(ze,null,De(Q(o).columns,(W,_e)=>(oe(),ye("tr",{key:W.columnId},[te("td",Dr,Oe(_e+1),1),te("td",null,Oe(W.columnName),1),te("td",null,[E(F,{"label-width":"0px",class:"form-error-popper",style:{"margin-bottom":"0"}},{default:A(()=>[E(O,{modelValue:W.columnComment,"onUpdate:modelValue":ee=>W.columnComment=ee,placeholder:"请输入"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),te("td",null,Oe(W.columnType),1),te("td",null,[E(F,{"label-width":"0px",class:"form-error-popper",style:{"margin-bottom":"0"}},{default:A(()=>[E(B,{modelValue:W.javaType,"onUpdate:modelValue":ee=>W.javaType=ee,placeholder:"请选择",class:"ele-fluid","popper-options":{strategy:"fixed"}},{default:A(()=>[E(y,{label:"Long",value:"Long"}),E(y,{label:"String",value:"String"}),E(y,{label:"Integer",value:"Integer"}),E(y,{label:"Double",value:"Double"}),E(y,{label:"BigDecimal",value:"BigDecimal"}),E(y,{label:"Date",value:"Date"}),E(y,{label:"Boolean",value:"Boolean"})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),te("td",null,[E(F,{"label-width":"0px",prop:"columns."+_e+".javaField",rules:{required:!0,message:"请输入Java属性",type:"string",trigger:"blur"},class:"form-error-popper",style:{"margin-bottom":"0"}},{default:A(()=>[E(O,{modelValue:W.javaField,"onUpdate:modelValue":ee=>W.javaField=ee,placeholder:"请输入"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),te("td",null,[E(F,{"label-width":"0px",class:"form-error-popper",style:{"margin-bottom":"0"}},{default:A(()=>[E(q,{modelValue:W.isInsert,"onUpdate:modelValue":ee=>W.isInsert=ee,"true-value":"1","false-value":"0"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),te("td",null,[E(F,{"label-width":"0px",class:"form-error-popper",style:{"margin-bottom":"0"}},{default:A(()=>[E(q,{modelValue:W.isEdit,"onUpdate:modelValue":ee=>W.isEdit=ee,"true-value":"1","false-value":"0"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),te("td",null,[E(F,{"label-width":"0px",class:"form-error-popper",style:{"margin-bottom":"0"}},{default:A(()=>[E(q,{modelValue:W.isList,"onUpdate:modelValue":ee=>W.isList=ee,"true-value":"1","false-value":"0"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),te("td",null,[E(F,{"label-width":"0px",class:"form-error-popper",style:{"margin-bottom":"0"}},{default:A(()=>[E(q,{modelValue:W.isQuery,"onUpdate:modelValue":ee=>W.isQuery=ee,"true-value":"1","false-value":"0"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),te("td",null,[E(F,{"label-width":"0px",class:"form-error-popper",style:{"margin-bottom":"0"}},{default:A(()=>[E(B,{modelValue:W.queryType,"onUpdate:modelValue":ee=>W.queryType=ee,placeholder:"请选择",class:"ele-fluid","popper-options":{strategy:"fixed"}},{default:A(()=>[E(y,{label:"=",value:"EQ"}),E(y,{label:"!=",value:"NE"}),E(y,{label:">",value:"GT"}),E(y,{label:">=",value:"GTE"}),E(y,{label:"<",value:"LT"}),E(y,{label:"<=",value:"LTE"}),E(y,{label:"LIKE",value:"LIKE"}),E(y,{label:"BETWEEN",value:"BETWEEN"})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),te("td",null,[E(F,{"label-width":"0px",class:"form-error-popper",style:{"margin-bottom":"0"}},{default:A(()=>[E(q,{modelValue:W.isRequired,"onUpdate:modelValue":ee=>W.isRequired=ee,"true-value":"1","false-value":"0"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),te("td",null,[E(F,{"label-width":"0px",class:"form-error-popper",style:{"margin-bottom":"0"}},{default:A(()=>[E(B,{modelValue:W.htmlType,"onUpdate:modelValue":ee=>W.htmlType=ee,placeholder:"请选择",class:"ele-fluid","popper-options":{strategy:"fixed"}},{default:A(()=>[E(y,{label:"文本框",value:"input"}),E(y,{label:"文本域",value:"textarea"}),E(y,{label:"下拉框",value:"select"}),E(y,{label:"单选框",value:"radio"}),E(y,{label:"复选框",value:"checkbox"}),E(y,{label:"日期控件",value:"datetime"}),E(y,{label:"图片上传",value:"imageUpload"}),E(y,{label:"文件上传",value:"fileUpload"}),E(y,{label:"富文本控件",value:"editor"})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),te("td",null,[E(F,{"label-width":"0px",class:"form-error-popper",style:{"margin-bottom":"0"}},{default:A(()=>[E(B,{clearable:"",modelValue:W.dictType,"onUpdate:modelValue":ee=>W.dictType=ee,placeholder:"请选择",class:"ele-fluid","popper-options":{strategy:"fixed"}},{default:A(()=>[(oe(!0),ye(ze,null,De(s.value,ee=>(oe(),de(y,{key:ee.dictType,value:ee.dictType,label:`${ee.dictName}(${ee.dictType})`},null,8,["value","label"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024)])]))),128))]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["loading"])]),_:1},8,["title","modelValue"])}}},Fr=He(Br,[["__scopeId","data-v-e065d837"]]),jr={__name:"gen-import-search",emits:["search"],setup(U,{emit:L}){const b=L,[N,w]=et({tableName:"",tableComment:""}),l=()=>{b("search",{...N})},a=()=>{w(),l()};return(r,s)=>{const h=Ye,p=rt,g=ot,o=Be,i=st,c=at;return oe(),de(c,{"label-width":"72px",onKeyup:vt(l,["enter"]),onSubmit:s[2]||(s[2]=tt(()=>{},["prevent"]))},{default:A(()=>[E(i,{gutter:8},{default:A(()=>[E(g,{lg:8,md:8,sm:24,xs:24},{default:A(()=>[E(p,{label:"表名称"},{default:A(()=>[E(h,{clearable:"",modelValue:Q(N).tableName,"onUpdate:modelValue":s[0]||(s[0]=n=>Q(N).tableName=n),modelModifiers:{trim:!0},placeholder:"请输入"},null,8,["modelValue"])]),_:1})]),_:1}),E(g,{lg:8,md:8,sm:24,xs:24},{default:A(()=>[E(p,{label:"表描述"},{default:A(()=>[E(h,{clearable:"",modelValue:Q(N).tableComment,"onUpdate:modelValue":s[1]||(s[1]=n=>Q(N).tableComment=n),modelModifiers:{trim:!0},placeholder:"请输入"},null,8,["modelValue"])]),_:1})]),_:1}),E(g,{lg:8,md:8,sm:24,xs:24},{default:A(()=>[E(p,{"label-width":"16px"},{default:A(()=>[E(o,{type:"primary",onClick:l},{default:A(()=>s[3]||(s[3]=[fe("查询")])),_:1}),E(o,{onClick:a},{default:A(()=>s[4]||(s[4]=[fe("重置")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}},Ur={__name:"gen-import",props:{modelValue:{type:Boolean},modelModifiers:{}},emits:Re(["done"],["update:modelValue"]),setup(U,{emit:L}){const b=L,N=Ve(U,"modelValue"),w=ue(!1),l=ue(null),a=ue([{type:"selection",columnKey:"selection",width:50,align:"center",fixed:"left"},{type:"index",columnKey:"index",width:50,align:"center",fixed:"left"},{prop:"tableName",label:"表名称",align:"center",minWidth:110},{prop:"tableComment",label:"表描述",align:"center",minWidth:110},{prop:"createTime",label:"创建时间",align:"center",minWidth:110},{prop:"updateTime",label:"更新时间",align:"center",minWidth:110}]),r=ue([]),s=({pages:i,where:c})=>Er({...c,...i}),h=i=>{var c,n;(n=(c=l.value)==null?void 0:c.reload)==null||n.call(c,{page:1,where:i})},p=()=>{N.value=!1},g=()=>{if(!r.value.length){pe.error("请选择要导入的表");return}w.value=!0;const i=r.value.map(c=>c.tableName).join();Cr({tables:i}).then(c=>{w.value=!1,pe.success(c),p(),b("done")}).catch(c=>{w.value=!1,pe.error(c.message)})},o=()=>{r.value=[],h()};return(i,c)=>{const n=St,m=Be,d=it;return oe(),de(d,{width:880,title:"导入表","body-style":{padding:"4px 16px"},"destroy-on-close":!0,modelValue:N.value,"onUpdate:modelValue":c[1]||(c[1]=u=>N.value=u),onOpen:o},{footer:A(()=>[E(m,{onClick:p},{default:A(()=>c[2]||(c[2]=[fe("取消")])),_:1}),E(m,{type:"primary",loading:w.value,onClick:g},{default:A(()=>c[3]||(c[3]=[fe(" 保存 ")])),_:1},8,["loading"])]),default:A(()=>[E(jr,{onSearch:h}),E(n,{ref_key:"tableRef",ref:l,"row-key":"tableName",columns:a.value,datasource:s,"show-overflow-tooltip":!0,selections:r.value,"onUpdate:selections":c[0]||(c[0]=u=>r.value=u),"highlight-current-row":"",toolbar:!1,pagination:{pageSize:6,pageSizes:[6,10,20,40,100]}},null,8,["columns","selections"])]),_:1},8,["modelValue"])}}};var Ae="[0-9](_*[0-9])*",qe=`\\.(${Ae})`,Ke="[0-9a-fA-F](_*[0-9a-fA-F])*",bt={className:"number",variants:[{begin:`(\\b(${Ae})((${qe})|\\.)?|(${qe}))[eE][+-]?(${Ae})[fFdD]?\\b`},{begin:`\\b(${Ae})((${qe})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{begin:`(${qe})[fFdD]?\\b`},{begin:`\\b(${Ae})[fFdD]\\b`},{begin:`\\b0[xX]((${Ke})\\.?|(${Ke})?\\.(${Ke}))[pP][+-]?(${Ae})[fFdD]?\\b`},{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${Ke})[lL]?\\b`},{begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],relevance:0};function jt(U,L,b){return b===-1?"":U.replace(L,N=>jt(U,L,b-1))}function Mr(U){const L=U.regex,b="[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*",N=b+jt("(?:<"+b+"~~~(?:\\s*,\\s*"+b+"~~~)*>)?",/~~~/g,2),s={keyword:["synchronized","abstract","private","var","static","if","const ","for","while","strictfp","finally","protected","import","native","final","void","enum","else","break","transient","catch","instanceof","volatile","case","assert","package","default","public","try","switch","continue","throws","protected","public","private","module","requires","exports","do","sealed","yield","permits","goto","when"],literal:["false","true","null"],type:["char","boolean","long","float","int","byte","short","double"],built_in:["super","this"]},h={className:"meta",begin:"@"+b,contains:[{begin:/\(/,end:/\)/,contains:["self"]}]},p={className:"params",begin:/\(/,end:/\)/,keywords:s,relevance:0,contains:[U.C_BLOCK_COMMENT_MODE],endsParent:!0};return{name:"Java",aliases:["jsp"],keywords:s,illegal:/<\/|#/,contains:[U.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]}),{begin:/import java\.[a-z]+\./,keywords:"import",relevance:2},U.C_LINE_COMMENT_MODE,U.C_BLOCK_COMMENT_MODE,{begin:/"""/,end:/"""/,className:"string",contains:[U.BACKSLASH_ESCAPE]},U.APOS_STRING_MODE,U.QUOTE_STRING_MODE,{match:[/\b(?:class|interface|enum|extends|implements|new)/,/\s+/,b],className:{1:"keyword",3:"title.class"}},{match:/non-sealed/,scope:"keyword"},{begin:[L.concat(/(?!else)/,b),/\s+/,b,/\s+/,/=(?!=)/],className:{1:"type",3:"variable",5:"operator"}},{begin:[/record/,/\s+/,b],className:{1:"keyword",3:"title.class"},contains:[p,U.C_LINE_COMMENT_MODE,U.C_BLOCK_COMMENT_MODE]},{beginKeywords:"new throw return else",relevance:0},{begin:["(?:"+N+"\\s+)",U.UNDERSCORE_IDENT_RE,/\s*(?=\()/],className:{2:"title.function"},keywords:s,contains:[{className:"params",begin:/\(/,end:/\)/,keywords:s,relevance:0,contains:[h,U.APOS_STRING_MODE,U.QUOTE_STRING_MODE,bt,U.C_BLOCK_COMMENT_MODE]},U.C_LINE_COMMENT_MODE,U.C_BLOCK_COMMENT_MODE]},bt,h]}}function Vr(U){const L=U.regex,b=U.COMMENT("--","$"),N={scope:"string",variants:[{begin:/'/,end:/'/,contains:[{match:/''/}]}]},w={begin:/"/,end:/"/,contains:[{match:/""/}]},l=["true","false","unknown"],a=["double precision","large object","with timezone","without timezone"],r=["bigint","binary","blob","boolean","char","character","clob","date","dec","decfloat","decimal","float","int","integer","interval","nchar","nclob","national","numeric","real","row","smallint","time","timestamp","varchar","varying","varbinary"],s=["add","asc","collation","desc","final","first","last","view"],h=["abs","acos","all","allocate","alter","and","any","are","array","array_agg","array_max_cardinality","as","asensitive","asin","asymmetric","at","atan","atomic","authorization","avg","begin","begin_frame","begin_partition","between","bigint","binary","blob","boolean","both","by","call","called","cardinality","cascaded","case","cast","ceil","ceiling","char","char_length","character","character_length","check","classifier","clob","close","coalesce","collate","collect","column","commit","condition","connect","constraint","contains","convert","copy","corr","corresponding","cos","cosh","count","covar_pop","covar_samp","create","cross","cube","cume_dist","current","current_catalog","current_date","current_default_transform_group","current_path","current_role","current_row","current_schema","current_time","current_timestamp","current_path","current_role","current_transform_group_for_type","current_user","cursor","cycle","date","day","deallocate","dec","decimal","decfloat","declare","default","define","delete","dense_rank","deref","describe","deterministic","disconnect","distinct","double","drop","dynamic","each","element","else","empty","end","end_frame","end_partition","end-exec","equals","escape","every","except","exec","execute","exists","exp","external","extract","false","fetch","filter","first_value","float","floor","for","foreign","frame_row","free","from","full","function","fusion","get","global","grant","group","grouping","groups","having","hold","hour","identity","in","indicator","initial","inner","inout","insensitive","insert","int","integer","intersect","intersection","interval","into","is","join","json_array","json_arrayagg","json_exists","json_object","json_objectagg","json_query","json_table","json_table_primitive","json_value","lag","language","large","last_value","lateral","lead","leading","left","like","like_regex","listagg","ln","local","localtime","localtimestamp","log","log10","lower","match","match_number","match_recognize","matches","max","member","merge","method","min","minute","mod","modifies","module","month","multiset","national","natural","nchar","nclob","new","no","none","normalize","not","nth_value","ntile","null","nullif","numeric","octet_length","occurrences_regex","of","offset","old","omit","on","one","only","open","or","order","out","outer","over","overlaps","overlay","parameter","partition","pattern","per","percent","percent_rank","percentile_cont","percentile_disc","period","portion","position","position_regex","power","precedes","precision","prepare","primary","procedure","ptf","range","rank","reads","real","recursive","ref","references","referencing","regr_avgx","regr_avgy","regr_count","regr_intercept","regr_r2","regr_slope","regr_sxx","regr_sxy","regr_syy","release","result","return","returns","revoke","right","rollback","rollup","row","row_number","rows","running","savepoint","scope","scroll","search","second","seek","select","sensitive","session_user","set","show","similar","sin","sinh","skip","smallint","some","specific","specifictype","sql","sqlexception","sqlstate","sqlwarning","sqrt","start","static","stddev_pop","stddev_samp","submultiset","subset","substring","substring_regex","succeeds","sum","symmetric","system","system_time","system_user","table","tablesample","tan","tanh","then","time","timestamp","timezone_hour","timezone_minute","to","trailing","translate","translate_regex","translation","treat","trigger","trim","trim_array","true","truncate","uescape","union","unique","unknown","unnest","update","upper","user","using","value","values","value_of","var_pop","var_samp","varbinary","varchar","varying","versioning","when","whenever","where","width_bucket","window","with","within","without","year"],p=["abs","acos","array_agg","asin","atan","avg","cast","ceil","ceiling","coalesce","corr","cos","cosh","count","covar_pop","covar_samp","cume_dist","dense_rank","deref","element","exp","extract","first_value","floor","json_array","json_arrayagg","json_exists","json_object","json_objectagg","json_query","json_table","json_table_primitive","json_value","lag","last_value","lead","listagg","ln","log","log10","lower","max","min","mod","nth_value","ntile","nullif","percent_rank","percentile_cont","percentile_disc","position","position_regex","power","rank","regr_avgx","regr_avgy","regr_count","regr_intercept","regr_r2","regr_slope","regr_sxx","regr_sxy","regr_syy","row_number","sin","sinh","sqrt","stddev_pop","stddev_samp","substring","substring_regex","sum","tan","tanh","translate","translate_regex","treat","trim","trim_array","unnest","upper","value_of","var_pop","var_samp","width_bucket"],g=["current_catalog","current_date","current_default_transform_group","current_path","current_role","current_schema","current_transform_group_for_type","current_user","session_user","system_time","system_user","current_time","localtime","current_timestamp","localtimestamp"],o=["create table","insert into","primary key","foreign key","not null","alter table","add constraint","grouping sets","on overflow","character set","respect nulls","ignore nulls","nulls first","nulls last","depth first","breadth first"],i=p,c=[...h,...s].filter(x=>!p.includes(x)),n={scope:"variable",match:/@[a-z0-9][a-z0-9_]*/},m={scope:"operator",match:/[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,relevance:0},d={match:L.concat(/\b/,L.either(...i),/\s*\(/),relevance:0,keywords:{built_in:i}};function u(x){return L.concat(/\b/,L.either(...x.map(z=>z.replace(/\s+/,"\\s+"))),/\b/)}const v={scope:"keyword",match:u(o),relevance:0};function C(x,{exceptions:z,when:k}={}){const V=k;return z=z||[],x.map(O=>O.match(/\|\d+$/)||z.includes(O)?O:V(O)?`${O}|0`:O)}return{name:"SQL",case_insensitive:!0,illegal:/[{}]|<\//,keywords:{$pattern:/\b[\w\.]+/,keyword:C(c,{when:x=>x.length<3}),literal:l,type:r,built_in:g},contains:[{scope:"type",match:u(a)},v,d,n,N,w,U.C_NUMBER_MODE,U.C_BLOCK_COMMENT_MODE,b,m]}}const Pr={class:"code-view"},Lr={key:0,class:"code-header"},$r={class:"code-title"},Wr={class:"code-tools"},Zr={class:"code-body"},qr={class:"code-line-numbers"},Kr=["innerHTML"],Gr={__name:"gen-code",props:{data:Object},setup(U){Me.registerLanguage("java",Mr),Me.registerLanguage("xml",ht),Me.registerLanguage("sql",Vr),Me.registerLanguage("vue",ht);const L=U,b=ue(""),N=ue([]),w=()=>{L.data&&L.data.meta&&_r(L.data.meta.text,L.data.label)};return tr(()=>L.data,l=>{if(!l||!l.meta){b.value="";return}const a=l.meta.text||"";b.value=Me.highlight(a,{language:l.meta.language}).value,N.value=a.split(`
`).map((r,s)=>s+1)},{immediate:!0}),(l,a)=>{const r=cr,s=nt,h=kt;return oe(),ye("div",Pr,[U.data&&U.data.meta?(oe(),ye("div",Lr,[te("div",$r,Oe(U.data.meta.path),1),te("div",Wr,[E(r,{text:U.data.meta.text,iconProps:{style:{color:"#d6dde3"}},tooltip:{placement:"bottom",bg:"#383838",arrowBg:"#383838"}},null,8,["text"]),E(h,{content:"下载",placement:"bottom",offset:6,bg:"#383838","arrow-bg":"#383838"},{default:A(()=>[E(s,{class:"code-icon-tool",onClick:w},{default:A(()=>[E(Q(Tt))]),_:1})]),_:1})])])):ke("",!0),te("div",Zr,[te("div",qr,[(oe(!0),ye(ze,null,De(N.value,p=>(oe(),ye("div",{key:p},Oe(p),1))),128))]),te("pre",{innerHTML:b.value},null,8,Kr)])])}}},Yr=He(Gr,[["__scopeId","data-v-4e0ebcec"]]),Hr={key:0,class:"code-menus"},Xr={__name:"gen-preview",props:Re({id:Number},{modelValue:{type:Boolean},modelModifiers:{}}),emits:["update:modelValue"],setup(U){const L=U,b=Ve(U,"modelValue"),N=ue(null),w=ue(!0),l=ue([]),a=ue(),r=ue(),s=o=>{var i;(i=o.children)!=null&&i.length||(a.value=o,r.value=a.value.key)},h=()=>{w.value=!0,Ir(L.id).then(o=>{w.value=!1,l.value=o,a.value=l.value[0].children[0].children[0],r.value=a.value.key}).catch(o=>{w.value=!1,pe.error(o.message)})},p=()=>{L.id&&h()},g=()=>{a.value=void 0,r.value=void 0,l.value=[]};return(o,i)=>{const c=mr,n=Ot,m=it;return oe(),de(m,{width:1100,title:"代码预览",position:"center","header-style":{paddingBottom:"8px"},"body-style":{padding:"0 8px 8px 8px",height:"calc(100vh - 66px)",maxHeight:"calc(100dvh - 66px)"},modelValue:b.value,"onUpdate:modelValue":i[0]||(i[0]=d=>b.value=d),style:{"--ele-modal-mobile-space":"8px"},onOpened:p,onClosed:g},{default:A(()=>[E(n,{loading:w.value,"spinner-style":{background:"transparent"},class:"code-wrapper"},{default:A(()=>[l.value.length?(oe(),ye("div",Hr,[E(c,{ref_key:"treeRef",ref:N,data:l.value,"node-key":"key","default-expand-all":!0,style:{"--ele-tree-item-height":"24px","--ele-tree-item-margin":"0px","--ele-tree-item-active-color":"#fff","--ele-tree-item-active-bg":"#707070","--ele-tree-item-active-hover-bg":"#707070","--el-tree-node-hover-bg-color":"#444444","--el-tree-expand-icon-color":"#e6edf3"},onNodeClick:s},{default:A(({data:d})=>[te("div",{class:Ge(["el-tree-node__label",{"is-active":d.key===r.value}])},Oe(d.label),3)]),_:1},8,["data"])])):ke("",!0),a.value?(oe(),de(Yr,{key:1,data:a.value},null,8,["data"])):ke("",!0)]),_:1},8,["loading"])]),_:1},8,["modelValue"])}}},Jr=He(Xr,[["__scopeId","data-v-4d6718f6"]]),Qr={__name:"gen-create",props:{modelValue:{type:Boolean},modelModifiers:{}},emits:Re(["done"],["update:modelValue"]),setup(U,{emit:L}){const b=L,N=Ve(U,"modelValue"),w=ue(""),l=ue(!1),a=()=>{N.value=!1},r=()=>{if(!w.value){pe.error("请输入创建表语句");return}l.value=!0,Or(w.value).then(h=>{l.value=!1,pe.success(h),a(),b("done")}).catch(h=>{l.value=!1,pe.error(h.message)})},s=()=>{w.value=""};return(h,p)=>{const g=Ye,o=Be,i=it;return oe(),de(i,{width:580,title:"创建表",modelValue:N.value,"onUpdate:modelValue":p[1]||(p[1]=c=>N.value=c),"body-style":{paddingTop:"6px"},onOpen:s},{footer:A(()=>[E(o,{onClick:a},{default:A(()=>p[2]||(p[2]=[fe("取消")])),_:1}),E(o,{type:"primary",loading:l.value,onClick:r},{default:A(()=>p[3]||(p[3]=[fe(" 保存 ")])),_:1},8,["loading"])]),default:A(()=>[p[4]||(p[4]=te("div",{style:{"margin-bottom":"6px"}},"创建表语句（支持多个建表语句）：",-1)),E(g,{rows:10,type:"textarea",modelValue:w.value,"onUpdate:modelValue":p[0]||(p[0]=c=>w.value=c),placeholder:"请输入创建表语句"},null,8,["modelValue"])]),_:1},8,["modelValue"])}}},ha=Object.assign({name:"ToolGen"},{__name:"index",setup(U){const L=ue(null),b=ue([{type:"selection",columnKey:"selection",width:50,align:"center",fixed:"left"},{type:"index",columnKey:"index",width:50,align:"center",fixed:"left"},{prop:"tableName",label:"表名称",align:"center",minWidth:110},{prop:"tableComment",label:"表描述",align:"center",minWidth:110},{prop:"className",label:"实体",align:"center",minWidth:110},{prop:"createTime",label:"创建时间",align:"center",width:180},{prop:"updateTime",label:"更新时间",align:"center",width:180},{columnKey:"action",label:"操作",width:280,align:"center",slot:"action",hideInPrint:!0,hideInExport:!0}]),N=ue([]),w=ue(null),l=ue(!1),a=ue(!1),r=ue(!1),s=ue(!1),h=({pages:u,where:v})=>wr({...v,...u}),p=u=>{var v,C;(C=(v=L.value)==null?void 0:v.reload)==null||C.call(v,{page:1,where:u})},g=u=>{w.value=u!=null?u:null,l.value=!0},o=()=>{a.value=!0},i=u=>{w.value=u!=null?u:null,r.value=!0},c=u=>{const v=u==null?N.value:[u];if(!v.length){pe.error("请至少选择一条数据");return}pt.confirm(`是否确认删除表名称为"${v.map(C=>C.tableName).join()}"的数据项?`,"系统提示",{type:"warning",draggable:!0}).then(()=>{const C=pe.loading({message:"请求中..",plain:!0});xr(v.map(x=>x.tableId)).then(()=>{C.close(),pe.success("删除成功"),p()}).catch(x=>{C.close(),pe.error(x.message)})}).catch(()=>{})},n=u=>{pt.confirm("确认要强制同步“"+u.tableName+"”的表结构吗？","系统提示",{type:"warning",draggable:!0}).then(()=>{const v=pe.loading({message:"请求中..",plain:!0});Tr(u.tableName).then(()=>{v.close(),pe.success("同步成功"),p()}).catch(C=>{v.close(),pe.error(C.message)})}).catch(()=>{})},m=u=>{if(!u&&!N.value.length){pe.error("请选择要生成的数据");return}const v=pe.loading({message:"请求中..",plain:!0});if(u&&u.genType=="1")Nr(u.tableName).then(()=>{v.close(),pe.success("成功生成到自定义路径:"+u.genPath)}).catch(C=>{v.close(),pe.error(C.message)});else{const C=N.value.map(x=>x.tableName).join();zr({tables:u?u.tableName:C},u?[u.tableId]:N.value.map(x=>x.tableId)).then(()=>{v.close()}).catch(x=>{v.close(),pe.error(x.message)})}},d=()=>{s.value=!0};return(u,v)=>{const C=Be,x=ir,z=or,k=Ct,V=St,O=Nt,F=Pt,G=ft("permission"),y=ft("role");return oe(),de(F,null,{default:A(()=>{var B;return[E(fr,{onSearch:p}),E(O,{"body-style":{paddingTop:"8px"}},{default:A(()=>[E(V,{ref_key:"tableRef",ref:L,"row-key":"tableId",columns:b.value,datasource:h,"show-overflow-tooltip":!0,selections:N.value,"onUpdate:selections":v[2]||(v[2]=t=>N.value=t),"highlight-current-row":"","export-config":{fileName:"代码生成"},"cache-key":"toolGenTable"},{toolbar:A(()=>[E(x,{size:12,wrap:""},{default:A(()=>[ve((oe(),de(C,{type:"primary",class:"ele-btn-icon",icon:Q(Tt),onClick:v[0]||(v[0]=t=>m())},{default:A(()=>v[7]||(v[7]=[fe(" 生成 ")])),_:1},8,["icon"])),[[G,"tool:gen:code"]]),ve((oe(),de(C,{type:"primary",class:"ele-btn-icon",icon:Q(rr),onClick:d},{default:A(()=>v[8]||(v[8]=[fe(" 创建 ")])),_:1},8,["icon"])),[[y,"admin"]]),ve((oe(),de(C,{type:"danger",class:"ele-btn-icon",icon:Q(ar),onClick:v[1]||(v[1]=t=>c())},{default:A(()=>v[9]||(v[9]=[fe(" 删除 ")])),_:1},8,["icon"])),[[G,"tool:gen:remove"]]),ve((oe(),de(C,{class:"ele-btn-icon",icon:Q(nr),onClick:o},{default:A(()=>v[10]||(v[10]=[fe(" 导入 ")])),_:1},8,["icon"])),[[G,"tool:gen:import"]])]),_:1})]),action:A(({row:t})=>[ve((oe(),de(z,{type:"primary",underline:!1,onClick:j=>i(t)},{default:A(()=>v[11]||(v[11]=[fe(" 预览 ")])),_:2},1032,["onClick"])),[[G,"tool:gen:preview"]]),ve(E(k,{direction:"vertical"},null,512),[[G,"ool:gen:code"]]),ve((oe(),de(z,{type:"primary",underline:!1,onClick:j=>m(t)},{default:A(()=>v[12]||(v[12]=[fe(" 生成 ")])),_:2},1032,["onClick"])),[[G,"ool:gen:code"]]),ve(E(k,{direction:"vertical"},null,512),[[G,"tool:gen:edit"]]),ve((oe(),de(z,{type:"primary",underline:!1,onClick:j=>n(t)},{default:A(()=>v[13]||(v[13]=[fe(" 同步 ")])),_:2},1032,["onClick"])),[[G,"tool:gen:edit"]]),ve(E(k,{direction:"vertical"},null,512),[[G,"tool:gen:edit"]]),ve((oe(),de(z,{type:"primary",underline:!1,onClick:j=>g(t)},{default:A(()=>v[14]||(v[14]=[fe(" 修改 ")])),_:2},1032,["onClick"])),[[G,"tool:gen:edit"]]),ve(E(k,{direction:"vertical"},null,512),[[G,"tool:gen:remove"]]),ve((oe(),de(z,{type:"danger",underline:!1,onClick:j=>c(t)},{default:A(()=>v[15]||(v[15]=[fe(" 删除 ")])),_:2},1032,["onClick"])),[[G,"tool:gen:remove"]])]),_:1},8,["columns","selections"])]),_:1}),E(Fr,{modelValue:l.value,"onUpdate:modelValue":v[3]||(v[3]=t=>l.value=t),data:w.value,onDone:p},null,8,["modelValue","data"]),E(Ur,{modelValue:a.value,"onUpdate:modelValue":v[4]||(v[4]=t=>a.value=t),onDone:p},null,8,["modelValue"]),E(Jr,{id:(B=w.value)==null?void 0:B.tableId,modelValue:r.value,"onUpdate:modelValue":v[5]||(v[5]=t=>r.value=t)},null,8,["id","modelValue"]),E(Qr,{modelValue:s.value,"onUpdate:modelValue":v[6]||(v[6]=t=>s.value=t),onDone:p},null,8,["modelValue"])]}),_:1})}}});export{ha as default};
