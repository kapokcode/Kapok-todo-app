<template>
	<div class="page-dashboard">
		<div class="dashboard-wrapper">
			<div class="dashboard-hello">欢迎您回来</div>
			<div class="dashboard-desc">以下是你当前的任务统计数据</div>
			<ul class="dashboard-block">
				<li>
					<a class="block-link" href="#todoListSection">
						<div class="block-title">今日任务</div>
						<div class="block-data">
							<div class="block-num">{{ todoList.length }}</div>
							<i class="el-icon-loading"></i>
						</div>
					</a>
				</li>
				<li>
					<a class="block-link" href="#endListSection">
						<div class="block-title">超期任务</div>
						<div class="block-data">
							<div class="block-num">{{ endList.length }}</div>
							<i class="el-icon-s-release"></i>
						</div>
					</a>
				</li>
				<li>
					<a class="block-link" href="#taskListSection">
						<div class="block-title">待完成任务</div>
						<div class="block-data">
							<div class="block-num">{{ taskList.length }}</div>
							<i class="el-icon-files"></i>
						</div>
					</a>
				</li>
			</ul>
			<div class="dashboard-list overlay-y">
				<!-- ======= todoList Section ======= -->
				<section id="todoListSection">

					<div class="dashboard-title">今日任务</div>
					<ul class="dashboard-ul">
						<li v-for="(item, index) in todoList" :key="index">
							<div class="item-title">
								<!--任务描述-->
								{{ item.content }}
							</div>
							<div v-if="item.desc" class="item-icon">
								<i class="taskfont">&#xe71a;</i>
							</div>
						</li>
					</ul>
				</section>
				<!-- End todoList Section -->
				<!-- ======= endList Section ======= -->
				<section id="endListSection">
					<div class="dashboard-title">超期任务</div>
					<ul class="dashboard-ul">
						<li v-for="(item, index) in endList" :key="index">
							<div class="item-title">
								<!--任务描述-->
								{{ item.content }}
							</div>
							<div v-if="item.desc" class="item-icon">
								<i class="taskfont">&#xe71a;</i>
							</div>
						</li>
					</ul>
				</section>
				<!-- End endList Section -->
				<!-- ======= taskList Section ======= -->
				<section id="taskListSection">
					<div class="dashboard-title">待完成任务</div>
					<ul class="dashboard-ul">
						<li v-for="(item, index) in taskList" :key="index">
							<div class="item-title">
								<!--任务描述-->
								{{ item.content }}
							</div>
							<div v-if="item.desc" class="item-icon">
								<i class="taskfont">&#xe71a;</i>
							</div>
						</li>
					</ul>
				</section>
				<!-- End taskList Section -->
			</div>
		</div>
	</div>
</template>

<script>
	import {
		getTaskInfo
	} from "@/api/todo/task";
	import {
		getInfo
	} from "@/api/login";

	export default {
		name: "Index",
		data() {
			return {
				taskList: [],
				todoList: [],
				endList: [],
				task: {}
			};
		},
		created() {
			this.getTask();
		},
		methods: {
			getTask() {
				getInfo().then(uesrResponse => {
					getTaskInfo(uesrResponse.user.userId).then(response => {
						this.taskList = response.data
						this.todoList = this.taskList.filter(function(task) {
							return new Date().getTime() < new Date(task.endAt).getTime()
						})
						this.endList = this.taskList.filter(function(task) {
							return new Date().getTime() >= new Date(task.endAt).getTime()
						})
						
					})
				})
			},
			scrollTo(anchor) {
				let element = document.getElementById(anchor);
				let top = element.offsetTop;
				window.scrollTo(0, top);
			}
		}
	};
</script>

<style scoped lang="scss">
	.home {
		blockquote {
			padding: 10px 20px;
			margin: 0 0 20px;
			font-size: 17.5px;
			border-left: 5px solid #eee;
		}

		hr {
			margin-top: 20px;
			margin-bottom: 20px;
			border: 0;
			border-top: 1px solid #eee;
		}

		.col-item {
			margin-bottom: 20px;
		}

		ul {
			padding: 0;
			margin: 0;
		}

		font-family: "open sans",
		"Helvetica Neue",
		Helvetica,
		Arial,
		sans-serif;
		font-size: 13px;
		color: #676a6c;
		overflow-x: hidden;

		ul {
			list-style-type: none;
		}

		h4 {
			margin-top: 0px;
		}

		h2 {
			margin-top: 10px;
			font-size: 26px;
			font-weight: 100;
		}

		p {
			margin-top: 10px;

			b {
				font-weight: 700;
			}
		}

		.update-log {
			ol {
				display: block;
				list-style-type: decimal;
				margin-block-start: 1em;
				margin-block-end: 1em;
				margin-inline-start: 0;
				margin-inline-end: 0;
				padding-inline-start: 40px;
			}
		}
	}
</style>