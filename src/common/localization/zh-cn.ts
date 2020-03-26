import { IAppStrings } from "../strings";

/**
 * App Strings for English language
 */
export const chinese: IAppStrings = {
    appName: "虚拟物标记工具",
    app:'VoTT',
    common: {
        displayName: "文饰",
        description: "描述",
        submit: "确定",
        cancel: "取消",
        save: "保存",
        delete: "删除",
        provider: "提供方",
        homePage: "首页",
    },
    titleBar: {
        help: "帮助",
        minimize: "最小值",
        maximize: "最大值",
        restore: "恢复",
        close: "关闭",
        welcome:"欢迎",
    },
    homePage: {
        newProject: "新建项目",
        openLocalProject: {
            title: "打开本地项目",
        },
        openCloudProject: {
            title: "打开云端项目",
            selectConnection: "选择一个连接",
        },
        recentProjects: "近期的项目",
        deleteProject: {
            title: "删除项目",
            confirmation: "确定要删除项目？",
        },
        importProject: {
            title: "引入项目",
            confirmation: "确定转换项目 ${project.file.name} 的设置到v2格式？推荐先备份项目。",
        },
        messages: {
            deleteSuccess: "已经成功删除 ${project.name}",
        },
    },
    appSettings: {
        title: "应用设置",
        storageTitle: "存储设置",
        uiHelp: "设置存放位置",
        save: "保存设置",
        securityToken: {
            name: {
                title: "名称",
            },
            key: {
                title: "键",
            },
        },
        securityTokens: {
            title: "安全令牌",
            description: "安全令牌用于加密项目配置中的敏感数据",
        },
        version: {
            description: "版本:",
        },
        commit: "提交SHA",
        devTools: {
            description: "打开应用程序开发人员工具以帮助诊断问题",
            button: "开发者工具开关",
        },
        reload: {
            description: "重载应用，放弃所有修改",
            button: "刷新应用",
        },
        messages: {
            saveSuccess: "成功保存应用设置",
        },
    },
    projectSettings: {
        title: "项目设置",
        securityToken: {
            title: "安全令牌",
            description: "用于加密项目中的敏感数据",
        },
        save: "保存项目",
        sourceConnection: {
            title: "源连接",
            description: "从哪里加载 资产",
        },
        targetConnection: {
            title: "目标连接",
            description: "在那里保存项目内容和导出的文件",
        },
        videoSettings: {
            title: "视频设置",
            description: "提取用于标记训练的图像帧的速率。",
            frameExtractionRate: "帧提取速率(帧/秒)",
        },
        addConnection: "增加连接",
        messages: {
            saveSuccess: "成功保存 ${project.name} 的项目设置",
        },
    },
    projectMetrics: {
        title: "项目指标",
        assetsSectionTitle: " 资产 ",
        totalAssetCount: "全部 资产",
        visitedAssets: "已观看 资产 (${count})",
        taggedAssets: "标记过 资产 (${count})",
        nonTaggedAssets: "未标记过 资产 (${count})",
        nonVisitedAssets: "未看过 资产 (${count})",
        tagsSectionTitle: "标签",
        totalRegionCount: "全部标记区域",
        totalTagCount: "全部标签",
        avgTagCountPerAsset: "资产 的平均标签数",
    },
    tags: {
        title: "标签",
        placeholder: "增加新标签",
        editor: "标签编辑器",
        modal: {
            name: "标签名称",
            color: "标亚颜色",
        },
        colors: {
            white: "White",
            gray: "Gray",
            red: "Red",
            maroon: "Maroon",
            yellow: "Yellow",
            olive: "Olive",
            lime: "Lime",
            green: "Green",
            aqua: "Aqua",
            teal: "Teal",
            blue: "Blue",
            navy: "Navy",
            fuschia: "Fuschia",
            purple: "Purple",
        },
        warnings: {
            existingName: "标签已经存在，请选择其他名称",
            emptyName: "标签名称不能是空",
            unknownTagName: "未知",
        },
        toolbar: {
            add: "增加新标签",
            search: "搜索标签",
            edit: "编辑标签",
            lock: "锁定标签",
            moveUp: "标签上移",
            moveDown: "标签下移",
            delete: "删除标签",
        },
    },
    connections: {
        title: "连接",
        details: "连接细节",
        settings: "连接设置",
        instructions: "请选择一个连接进行编辑",
        save: "保存连接",
        messages: {
            saveSuccess: "成功保存 ${connection.name}",
            deleteSuccess: "成功删除 ${connection.name}",
        },
        imageCorsWarning: "警告: 在浏览器使用VoTT时，有些来自BingImage搜索的 资产 可能会因为跨域不能正确的读取",
        blobCorsWarning: "警告：必须在Azure Blob存储帐户上启用CORS（跨域资源共享），才能将其用作源或目标连接。 有关启用CORS的更多信息，请参见 {0}",
        azDocLinkText: "Azure 文档.",
        providers: {
            azureBlob: {
                title: "Azure Blob存储",
                description: "",
                accountName: {
                    title: "账户名称",
                    description: "",
                },
                containerName: {
                    title: "容器名称",
                    description: "",
                },
                sas: {
                    title: "SAS",
                    description: "用于验证Blob存储帐户的共享访问签名",
                },
                createContainer: {
                    title: "创建容器",
                    description: "如果不存在此blob容器，会创建一个。",
                },
            },
            bing: {
                title: "Bing Image搜索",
                options: "Bing Image搜索设置",
                apiKey: "API 键",
                query: "查询",
                aspectRatio: {
                    title: "长宽比",
                    all: "全部",
                    square: "方形",
                    wide: "宽",
                    tall: "高",
                },
            },
            local: {
                title: "本地文件系统",
                folderPath: "文件路径",
                selectFolder: "选择文件夹",
                chooseFolder: "选中文件夹",
            },
        },
    },
    editorPage: {
        width: "宽度",
        height: "高度",
        tagged: "已标记",
        visited: "已观看",
        toolbar: {
            select: "选择 (V)",
            pan: "Pan",
            drawRectangle: "绘制长方形",
            drawPolygon: "绘制多边形",
            copyRectangle: "复制长方形",
            copy: "复制区域",
            cut: "剪切区域",
            paste: "粘贴区域",
            removeAllRegions: "移除全部区域",
            previousAsset: "上一个 资产 ",
            nextAsset: "下一个 资产 ",
            saveProject: "保存项目",
            exportProject: "导出项目",
            activeLearning: "激活的学习",
        },
        videoPlayer: {
            previousTaggedFrame: {
                tooltip: "上一个标签帧",
            },
            nextTaggedFrame: {
                tooltip: "下一个标签帧",
            },
            previousExpectedFrame: {
                tooltip: "上一帧",
            },
            nextExpectedFrame: {
                tooltip: "下一帧",
            },
        },
        help: {
            title: "翻转帮助菜单",
            escape: "释放帮助菜单",
        },
        assetError: "无法装载asset",
        tags: {
            hotKey: {
                apply: "用热键申请标签",
                lock: "用热键锁定标签",
            },
            rename: {
                title: "重命名标签",
                confirmation: "确认重命名此标签？ 所有的标记的 资产 都会重命名。",
            },
            delete: {
                title: "删除标签",
                confirmation: "确认删除标签?所有使用过此标签的 资产 和区域都会删除此标签。"
            },
        },
        canvas: {
            removeAllRegions: {
                title: "移除所有区域",
                confirmation: "确定移除所有区域?",
            },
        },
        messages: {
            enforceTaggedRegions: {
                title: "检测到无效的区域",
                description: "至少一个区域未被标记过。进行下一个 资产 之前确定所有区域被标记。"
            },
        },
    },
    export: {
        title: "导出",
        settings: "导出设置",
        saveSettings: "保存导出设置",
        providers: {
            common: {
                properties: {
                    assetState: {
                        title: "资源状态",
                        description: "选中的资产会被导出",
                        options: {
                            all: "全部 资产 ",
                            visited: "仅限已观看的 资产 ",
                            tagged: "仅限标记过的 资产 ",
                        },
                    },
                    testTrainSplit: {
                        title: "测试 / 训练 拆分",
                        description: "测试列拆分以用于导出数据",
                    },
                    includeImages: {
                        title: "包含图片",
                        description: "是否在目标连接中包括二进制映像资产",
                    },
                },
            },
            vottJson: {
                displayName: "VoTT JSON",
            },
            azureCV: {
                displayName: "Azure自定义视觉服务",
                regions: {
                    australiaEast: "东澳大利亚",
                    centralIndia: "印度中部",
                    eastUs: "美国东部",
                    eastUs2: "美国东部2",
                    japanEast: "日本东部",
                    northCentralUs: "美国中北部",
                    northEurope: "北欧",
                    southCentralUs: "美国中南部",
                    southeastAsia: "东南亚",
                    ukSouth: "英国南部",
                    westUs2: "美国西部2",
                    westEurope: "西欧",
                },
                properties: {
                    apiKey: {
                        title: "API 键",
                    },
                    region: {
                        title: "区域",
                        description: "部署服务的Azure区域",
                    },
                    classificationType: {
                        title: "分类类型",
                        options: {
                            multiLabel: "多重标签图片",
                            multiClass: "但标签图片",
                        },
                    },
                    name: {
                        title: "项目名称",
                    },
                    description: {
                        title: "项目描述",
                    },
                    domainId: {
                        title: "领域",
                    },
                    newOrExisting: {
                        title: "新建或已存项目",
                        options: {
                            new: "新建项目",
                            existing: "已存项目",
                        },
                    },
                    projectId: {
                        title: "项目名称",
                    },
                    projectType: {
                        title: "项目类型",
                        options: {
                            classification: "分类",
                            objectDetection: "物体检测",
                        },
                    },
                },
            },
            tfRecords: {
                displayName: "Tensorflow记录",
            },
            pascalVoc: {
                displayName: "Pascal VOC",
                exportUnassigned: {
                    title: "导出未分配",
                    description: "是否在导出的数据中包括未分配的标签",
                },
            },
            cntk: {
                displayName: "Microsoft认知工具包（CNTK）",
            },
            csv: {
                displayName: "逗号分隔值（CSV）",
            },
        },
        messages: {
            saveSuccess: "成功保存导出设置",
        },
    },
    activeLearning: {
        title: "主动学习",
        form: {
            properties: {
                modelPathType: {
                    title: "模型提供者",
                    description: "从何处加载训练模型",
                    options: {
                        preTrained: "预培训 Coco SSD",
                        customFilePath: "自定义文件路径",
                        customWebUrl: "自定义Url",
                    },
                },
                autoDetect: {
                    title: "自动侦测",
                    description: "在 资产 之间导航时是否自动进行预测",
                },
                modelPath: {
                    title: "模型路径",
                    description: "从本地文件系统中选择模型",
                },
                modelUrl: {
                    title: "模型网址",
                    description: "从公共网址加载模型",
                },
                predictTag: {
                    title: "预测标签",
                    description: "是否在预测中自动包含标签",
                },
            },
        },
        messages: {
            loadingModel: "正在加载主动学习模型...",
            errorLoadModel: "加载主动学习模型时出错",
            saveSuccess: "成功保存了主动学习设置",
        },
    },
    profile: {
        settings: "个人设置",
    },
    errors: {
        unknown: {
            title: "未知错误",
            message: "该应用程序遇到未知错误。 请再试一遍。",
        },
        projectUploadError: {
            title: "上传文件时出错",
            message: `上传文件时出错。
                  请确认文件格式正确，然后重试。`,
        },
        genericRenderError: {
            title: "加载应用程序时出错",
            message: "呈现应用程序时发生错误。 请再试一遍",
        },
        projectInvalidSecurityToken: {
            title: "加载项目文件时出错",
            message: `项目引用的安全令牌无效。
                 验证是否在您的应用程序设置中正确设置了项目的安全令牌`,
        },
        projectInvalidJson: {
            title: "解析项目文件时出错",
            message: "所选的项目文件不包含有效的JSON。 请重试该文件。",
        },
        projectDeleteError: {
            title: "删除项目时出错",
            message: `删除项目时发生错误。
                 验证项目文件和安全令牌是否存在，然后重试`,
        },
        securityTokenNotFound: {
            title: "加载项目文件时出错",
            message: `在当前的应用程序设置中找不到该项目引用的安全令牌。
                 验证安全令牌是否存在，然后尝试重新加载项目。`,
        },
        canvasError: {
            title: "加载画布时出错",
            message: "加载画布时发生错误，请检查项目的 资产 ，然后重试。",
        },
        importError: {
            title: "导入V1项目时出错",
            message: "导入V1项目时出错。 检查项目文件，然后重试",
        },
        pasteRegionTooBigError: {
            title: "错误粘贴区域",
            message: "该资产太大的区域。 尝试复制其他地区",
        },
        exportFormatNotFound: {
            title: "导出项目时出错",
            message: "项目缺少导出格式。 请在导出设置页面中选择一种导出格式。",
        },
        activeLearningPredictionError: {
            title: "主动学习错误",
            message: `预测当前资产中的区域时发生错误。 
                 请验证您的有效学习配置，然后重试`,
        },
    },
};
