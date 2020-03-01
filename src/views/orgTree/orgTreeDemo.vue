//示例代码
<template>
  <div id="tree">
    <el-tabs>
      <el-tab-pane
        v-for="item in demoData"
        :key="item.id"
        :label="item.firstLevelThemeName"
        :name="item.firstLevelThemeName"
      >
        <el-row
          :gutter="20"
          class="text-center"
          v-for="child in item.children"
          :key="child.id"
        >
          <el-col v-for="subChild in child" :key="subChild.id" :span="12">
            <vue2-org-tree
              name="demo"
              :data="subChild"
              :horizontal="horizontal"
              :collapsable="collapsable"
              :label-class-name="labelClassName"
              :render-content="renderContentDemo"
              @on-expand="onExpand"
              @on-node-click="onNodeClick"
              @on-node-mouseover="mouseOver"
            />
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>

    <!-- <div class="text-center">
      <vue2-org-tree
        name="test"
        :data="data"
        :horizontal="horizontal"
        :collapsable="collapsable"
        :label-class-name="labelClassName"
        :render-content="renderContent"
        @on-expand="onExpand"
        @on-node-click="onNodeClick"
        @on-node-mouseover="mouseOver"
      />
    </div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: {
        id: 100,
        label: "度量指标体系",
        children: [
          {
            id: 1,
            label: "交付质量"
          },
          {
            id: 2,
            label: "交付效能"
          },
          {
            id: 2,
            label: "交付效能"
          },
          {
            id: 2,
            label: "交付效能"
          }
        ]
      },
      horizontal: true,
      collapsable: false,
      expandAll: true,
      labelClassName: "bg-white",
      // start
      demoData: [
        {
          total: 1,
          children: [
            [
              {
                themeName: "分销达标分析",
                total: 1,
                children: [
                  {
                    name: "分销达标",
                    code: "CMPLYA_DIST_001"
                  }
                ],
                code: "CMPLYA_DIST",
                atomic: 0,
                derive: 1
              },
              {
                themeName: "分销达标分析11",
                total: 1,
                children: [
                  {
                    name: "分销达标11",
                    code: "CMPLYA_DIST_001"
                  }
                ],
                code: "CMPLYA_DIST",
                atomic: 0,
                derive: 1
              }
            ],
            [
              {
                themeName: "分销达标分析11",
                total: 1,
                children: [
                  {
                    name: "分销达标11",
                    code: "CMPLYA_DIST_001"
                  }
                ],
                code: "CMPLYA_DIST",
                atomic: 0,
                derive: 1
              }
            ]
          ],
          firstLevelThemeCode: "CMPLYA",
          atomic: 0,
          firstLevelThemeName: "合规分析",
          derive: 1
        },
        {
          total: 2,
          children: [
            [
              {
                themeName: "三方电商分析",
                total: 2,
                children: [
                  {
                    name: "销售额目标",
                    code: "CNSMR_ECA_007"
                  },
                  {
                    name: "销售额目标",
                    code: "CNSMR_ECA_008"
                  }
                ],
                code: "CNSMR_ECA",
                atomic: 1,
                derive: 1
              }
            ]
          ],
          firstLevelThemeCode: "CNSMR",
          atomic: 1,
          firstLevelThemeName: "消费者分析",
          derive: 1
        },
        {
          total: 5,
          children: [
            [
              {
                themeName: "市场占有率分析",
                total: 5,
                children: [
                  {
                    name: "尼尔森销售金额（元）",
                    code: "MMA_MSA_001"
                  },
                  {
                    name: "尼尔森销售量（千升）",
                    code: "MMA_MSA_002"
                  },
                  {
                    name: "尼尔森销售额占有率",
                    code: "MMA_MSA_003"
                  },
                  {
                    name: "CNCS销售额",
                    code: "MMA_MSA_008"
                  },
                  {
                    name: "CNCS销售量",
                    code: "MMA_MSA_009"
                  }
                ],
                code: "MMA_MSA",
                atomic: 5,
                derive: 0
              },
              {
                themeName: "市场占有率分析",
                total: 5,
                children: [
                  {
                    name: "CNCS销售额",
                    code: "MMA_MSA_008"
                  },
                  {
                    name: "CNCS销售量",
                    code: "MMA_MSA_009"
                  }
                ],
                code: "MMA_MSA",
                atomic: 5,
                derive: 0
              }
            ],
            [
              {
                themeName: "市场占有率分析",
                total: 5,
                children: [
                  {
                    name: "尼尔森销售金额（元）",
                    code: "MMA_MSA_001"
                  },
                  {
                    name: "尼尔森销售量（千升）",
                    code: "MMA_MSA_002"
                  },
                  {
                    name: "尼尔森销售额占有率",
                    code: "MMA_MSA_003"
                  },
                  {
                    name: "CNCS销售额",
                    code: "MMA_MSA_008"
                  },
                  {
                    name: "CNCS销售量",
                    code: "MMA_MSA_009"
                  }
                ],
                code: "MMA_MSA",
                atomic: 5,
                derive: 0
              },
              {
                themeName: "市场占有率分析",
                total: 5,
                children: [
                  {
                    name: "尼尔森销售金额（元）",
                    code: "MMA_MSA_001"
                  },
                  {
                    name: "尼尔森销售量（千升）",
                    code: "MMA_MSA_002"
                  },
                  {
                    name: "尼尔森销售额占有率",
                    code: "MMA_MSA_003"
                  },
                  {
                    name: "CNCS销售额",
                    code: "MMA_MSA_008"
                  },
                  {
                    name: "CNCS销售量",
                    code: "MMA_MSA_009"
                  }
                ],
                code: "MMA_MSA",
                atomic: 5,
                derive: 0
              }
            ]
          ],
          firstLevelThemeCode: "MMA",
          atomic: 5,
          firstLevelThemeName: "市场宏观分析",
          derive: 0
        }
      ] // end
    };
  },
  methods: {
    renderContentDemo(h, data) {
      console.log("data.name", data.name);
      console.log("data.themeName", data.themeName);

      return data.name === undefined ? data.themeName : data.name;
      // let res = "";
      // if (data.name) {
      //   res = data.name;
      // } else {
      //   res = data.themeName;
      // }
      // return data.name;
    },
    renderContent(h, data) {
      return data.label;
    },
    mouseOver(e, data) {
      // console.log("mouse over e",e);
      console.log("mouse over data", data);
    },
    onExpand(e, data) {
      if ("expand" in data) {
        data.expand = !data.expand;
        if (!data.expand && data.children) {
          this.collapse(data.children);
        }
      } else {
        this.$set(data, "expand", true);
      }
    },
    //点击选项执行的方法，可以用于跳转到其他链接，注意一定要写协议头
    onNodeClick(e, data) {
      //console.log(data.label);
      if (data.url == null) {
        return false;
      } else {
        window.open(data.url);
      }
    },
    collapse(list) {
      var _this = this;
      list.forEach(function(child) {
        if (child.expand) {
          child.expand = false;
        }
        child.children && _this.collapse(child.children);
      });
    },
    expandChange() {
      this.toggleExpand(this.data, this.expandAll);
    },
    toggleExpand(data, val) {
      var _this = this;
      if (Array.isArray(data)) {
        data.forEach(function(item) {
          _this.$set(item, "expand", val);
          if (item.children) {
            _this.toggleExpand(item.children, val);
          }
        });
      } else {
        this.$set(data, "expand", val);
        if (data.children) {
          _this.toggleExpand(data.children, val);
        }
      }
    }
  }
};
</script>
<style type="text/css">
.org-tree-node-label {
  white-space: nowrap;
}
.bg-white {
  background-color: white;
}
.bg-orange {
  background-color: orange;
}
.bg-gold {
  background-color: gold;
}
.bg-gray {
  background-color: gray;
}
.bg-lightpink {
  background-color: lightpink;
}
.bg-chocolate {
  background-color: chocolate;
}
.bg-tomato {
  background-color: tomato;
}
</style>
