'use client';

import { BLOG_POSTS } from '@/data/blog';
import { motion } from 'framer-motion';
import { format } from 'date-fns';

export default function BlogSection() {
  return (
    <div className="space-y-4">
      <h2 className="text-terminal-cyan font-semibold text-lg border-b border-terminal-green/30 pb-2">
        blog & insights
      </h2>
      <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1">
        {BLOG_POSTS.map((post, i) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="p-3 rounded border border-terminal-green/20 hover:border-terminal-green/40 transition-colors"
          >
            <h3 className="font-medium text-terminal-green text-sm">{post.title}</h3>
            <p className="text-terminal-gray text-xs mt-1">{post.excerpt}</p>
            <p className="text-terminal-cyan/80 text-xs mt-2">
              {format(new Date(post.date), 'MMM d, yyyy')}
            </p>
            <div className="flex flex-wrap gap-1 mt-2">
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="text-[10px] px-1.5 py-0.5 rounded bg-terminal-green/10 text-terminal-gray"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
