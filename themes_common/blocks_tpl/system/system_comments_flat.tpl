<table class="table table-bordered">
    <{foreach item=comment from=$comments}>
        <{includeq file="$xoops_rootpath/modules/tadtools/themes_common/blocks_tpl/system/system_comment.tpl" comment=$comment}>
    <{/foreach}>
</table>

<{if $commentform}>
    <div class="commentform"><{$commentform}></div>
<{/if}>
